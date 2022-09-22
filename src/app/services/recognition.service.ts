import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecognitionService {

  constructor(
    private http:HttpClient
  ) { }

  employees()
  {
    return this.http.get(`${environment.api}empleados`);
  }

  areas()
  {
    return this.http.get(`${environment.api}areas_por_empresa`);
  }

  create(data)
  {
    return this.http.post(`${environment.api}crear-reconocimiento`,data);
  }
}
