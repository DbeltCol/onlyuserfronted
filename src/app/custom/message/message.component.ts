import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/classes/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  error:boolean = false;
  success:boolean = false;
  message:string = '';

  constructor() { }
  
  

  ngOnInit(): void {

    //event to errors
    Message.errorEmitter.subscribe((error:boolean) => {
      this.error = error
    })

    Message.messageEmitter.subscribe((message:string) => {
      this.message = message
    })

    //events to success
    Message.successEmitter.subscribe((success:boolean) => {
      this.success = success
    })
  }

  removeError()
  {
    Message.error = false;

    Message.success = false;
  }

}
