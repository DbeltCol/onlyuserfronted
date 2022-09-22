import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  posts:any
  constructor(
    private postService:PostService
  ) { }

  ngOnInit(): void {
    this.postService.all().subscribe((res:any) => {
    this.posts = res.data

    })
  }

}
