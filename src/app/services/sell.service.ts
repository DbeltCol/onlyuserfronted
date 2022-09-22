import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(
    private http: HttpClient
  ) { }

  createSell(data)
  {
    return this.http.post(`${environment.api}create-sell`,data)
  }
}
