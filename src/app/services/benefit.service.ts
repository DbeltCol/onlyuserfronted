import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BenefitService {

  constructor(
    private http:HttpClient
  ) { }

  //return all benefits filter by category

  benefitFiltered(id)
  {
    return this.http.get(`${environment.api}benefits/by-type-benefit/${id}`);
  }

  all()
  {
    return this.http.get(`${environment.api}benefits`);
  }



  filterByName(data)
  {
    return this.http.post(`${environment.api}benefit-filter`,data)
  }


  //get type benefits to filter

  allTypeBenefit()
  {
    return this.http.get(`${environment.api}type-benefits`);
  }

  getBenefitByCode(code)
  {

    return this.http.get(`${environment.api}benefits/${code}`)
  }


}
