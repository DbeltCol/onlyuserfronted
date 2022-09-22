import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  constructor(
    private http:HttpClient
  ) { }

  all()
  {
    return this.http.get(`${environment.api}posts`);
  }

  create(data)
  {
    return this.http.post(`${environment.api}posts`,data);
  }
}
