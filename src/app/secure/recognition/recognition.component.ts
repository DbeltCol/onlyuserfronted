import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth } from 'src/app/classes/auth';
import { Message } from 'src/app/classes/message';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';
import { RecognitionService } from 'src/app/services/recognition.service';

@Component({
  selector: 'app-recognition',
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.css']
})
export class RecognitionComponent implements OnInit {


  typeRecognition: string = "";
  user: User;
  actors: any = ''
  recognitions: any = [];
  formRecognition: FormGroup;

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private recognitionService: RecognitionService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formRecognition = this.formBuilder.group({
      motivo: '',
      recognitions:'',
      type:'',
      
    });
  }

  getTypeRecognition(event) {

    this.authService.user().subscribe((user: any) => {
      this.user = user.data;
    })

    this.typeRecognition = event.target.value;

    this.recognitions = []; 


    if (this.typeRecognition === 'Personal') {
      this.recognitionService.employees().subscribe((res: any) => {
        this.actors = res.data

      })
    } else {
      this.recognitionService.areas().subscribe((res: any) => {
        this.actors = res

      })
    }
  }

  giveActorRecognization(event) {
    const selected = this.actors.filter((actor) => actor.id == event.target.value);

    this.recognitions.push(selected[0]);

  }

  deleteSelected(event) {
    event.target.parentNode.parentNode.remove();
  }

  saveData() {
    this.formRecognition.patchValue({
      recognitions: this.recognitions,
      type: this.typeRecognition,
    })

    const data = this.formRecognition.getRawValue()

    this.recognitionService.create(data).subscribe((res:any) => {
        Message.success = true;
        Message.message = 'Has creado un recnocimiento'
    })

    
  }

}
