import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ChildActivationEnd, Router } from '@angular/router';
import { Auth } from 'src/app/classes/auth';
import { User } from 'src/app/interface/user';
import { AuthService } from 'src/app/services/auth.service';
import { BenefitService } from 'src/app/services/benefit.service';
import { SellService } from 'src/app/services/sell.service';

@Component({
  selector: 'app-detailbenefit',
  templateUrl: './detailbenefit.component.html',
  styleUrls: ['./detailbenefit.component.css']
})
export class DetailbenefitComponent implements OnInit {

  benefit: any;
  user: any;
  addMore: boolean = false;
  form: FormGroup
  id: any
  dinamicInputs: number;
  categoryBenefit:any

  constructor(
    private benefitService: BenefitService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    private sellService: SellService,

  ) {

    this.route.params.subscribe((res: any) => {
      this.id = res.id

      this.benefitService.getBenefitByCode(res.id).subscribe((res: any) => {
        this.benefit = res.data

        console.log(this.benefit);

        this.dinamicForm(this.benefit)
      })
    })

  }

  ngOnInit(): void {

    this.authService.user().subscribe((res: any) => {
      this.user = res.data

    })

    


    /*   this.route.params.subscribe((res: any) => {
        this.benefitService.getBenefitByCode(res.id).subscribe((res: any) => {
          this.benefit = res.data
  
  
  
          this.dinamicForm(this.benefit)
        })
      })
   */

   
    this.form = this.formBuilder.group({
      quantityTime: ['', {
        validators: [Validators.required, Validators.minLength(1)],

      }],
      //nameCompleted: ['', [Validators.required,Validators.minLength(2)]],
      beneficiaries: this.formBuilder.array([], Validators.required),
      benefit_id: this.id,
      amount: '',

    })
  }

  dinamicForm(benefit) {
    const dinamicForm = document.getElementById('dinamicForm')

    if (dinamicForm) {

      switch (benefit.typeBenefitSelected.name) {

        case 'Salud':
        case 'Exequias':
        case 'Odontologíco':
        case 'Medicina Prepagada': {
          this.dinamicInputs = 1

          this.addMore = true;
        }

          break;

        //vida
        case 'Vida Obligatoria':
        case 'Vida Voluntaria': {
          this.dinamicInputs = 2

          this.addMore = true;
        }

          break;

        //vehiculos
        case 'Autos':
        case 'Bicicletas': {
          this.dinamicInputs = 3
          this.addMore = true;
        }

          break;

        //hogar
        case 'Hogar': {
          this.dinamicInputs = 4

          this.addMore = true;
        }

          break;


        //mascotas
        case 'Mascotas': {
          this.dinamicInputs = 5

          this.addMore = true;
        }

          break;



        //beneficios de otros
        case 'AFC':
        case 'APV':
        case 'Apoyo Educativo':
        case 'Club':
        case 'Cooperativa':
        case 'Reembolsos':
        case 'Tarjeta Beneflex':

          {
            this.dinamicInputs = 6
          }
          break;

        default:
          console.log('no es salud');
          break;

      }

    }
  }


  saveData(event) {
    let data: any

    data = this.form.getRawValue()


    this.sellService.createSell(data).subscribe((res) => {
      console.log(res);
    })
  }

  get beneficiaries() {
    return this.form.get('beneficiaries') as FormArray;
  }

  addBeneficiaries() {
    const beneficiariesFormGroup = this.formBuilder.group({
      nameCompleted: ['', {
        validators: [Validators.required]
      }],
      typeDoc: ['', {
        validators: [Validators.required]
      }],
      document: ['', {
        validators: [Validators.required]
      }],
      birthday: ['', {
        validators: [Validators.required]
      }],
      relationship: ['', {
        validators: [Validators.required]
      }],

    })

    this.beneficiaries.push(beneficiariesFormGroup)
  }

  addPolicys() {

  }

  removeBeneficiary(index) {

    this.beneficiaries.removeAt(index)
    this.beneficiaries.controls.splice(index, 0)
  }

}
