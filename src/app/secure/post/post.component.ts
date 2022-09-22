import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/classes/message';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  formPost: FormGroup
  emptyFormGroup = true;

  constructor(
    private formBuilder:FormBuilder,
    private router:Router,
    private postService:PostService,
  ) { }

  ngOnInit(): void {
    this.formPost = this.formBuilder.group({
      post:''
    });

    const data = this.formPost.getRawValue();

  }

  saveData()
  {
    const data = this.formPost.getRawValue();

    this.postService.create(data).subscribe((res) => {
      Message.success = true;
      Message.message = 'Has creado una publicación'
    })




    /* const modal = document.getElementById('modalPost');
   
    const background = document.getElementsByClassName('modal-backdrop')

    const body = document.querySelector('body')

    modal.classList.remove('show')

    modal.style.display = 'none';

    background[0].remove()

    body.classList.remove('modal-open')

    body.removeAttribute('style')

    modal.removeAttribute('aria-modal')

    modal.setAttribute('aria-hidden','true')
    modal.removeAttribute('role') */
  }

  enableButton()
  {
    const data = this.formPost.getRawValue();

    data.post.length > 0 ? this.emptyFormGroup = false : this.emptyFormGroup = true

  }
}
