import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data)
  {
    return this.http.post(`${environment.api}login`,data);
  }

  user()
  {
    return this.http.get(`${environment.api}mi-perfil`);
  }

}
