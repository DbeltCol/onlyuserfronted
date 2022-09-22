import { Component, OnInit } from '@angular/core';
import { BenefitService } from 'src/app/services/benefit.service';

@Component({
  selector: 'app-benefit',
  templateUrl: './benefit.component.html',
  styleUrls: ['./benefit.component.css']
})
export class BenefitComponent implements OnInit {

  typeBenefits:any;

  benefits:any;

  constructor(
    private benefitService:BenefitService
  ) { }

  ngOnInit(): void {
    this.getTypeBenefits()
    this.all()
  }

  //get all benefits

  all()
  {
    this.benefitService.all().subscribe((benefits:any) => {
      this.benefits = benefits.data
    })
  }

  filter(event)
  {
    this.benefitService.filterByName({filter: event.target.value}).subscribe((res:any) => {
     this.benefits = res.data
    })
  }

  //get all type benefits available
  getTypeBenefits()
  {
    this.benefitService.allTypeBenefit().subscribe((typeBenefits:any) => {
      this.typeBenefits = typeBenefits.data
    })
  }

  //filter benefits by type
  getBenefitByType(event)
  {
    const id = event.target.value; 

    this.benefitService.benefitFiltered(id).subscribe((benefits:any) => {
      console.log(benefits);
      this.benefits = benefits.data
    })
  }

  

}
