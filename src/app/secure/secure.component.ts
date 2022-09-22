import { Component, OnInit } from '@angular/core';
import { Auth } from '../classes/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  user = null;
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user().subscribe((res:any) => {
      this.user = res.data
      Auth.user = this.user
    })
  }

}
