import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/classes/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user:any;
  constructor() { }

  ngOnInit(): void {

    Auth.userEmitter.subscribe((user) => {
      this.user = user;
    })
  }

}
