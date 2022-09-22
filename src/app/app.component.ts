import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontendUserOnlyForU';

  constructor(
    private router:Router,
    private authService:AuthService
  ){

  }

  ngOnInit(): void
  {
    this.authService.user().subscribe((res) => {
      if(res) this.router.navigate(['/dashboard']);
    },err => {
      this.router.navigate(['/login']);
    })
  }
}
