import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'src/app/classes/message';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  button: any = '';
  error: boolean = false;
  form: FormGroup

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: '',
    })


    if(localStorage.getItem('token'))
    {
      this.router.navigate(['/dashboard'])
    }
  }

  saveData(event: any) {
    this.button = event.target.querySelector('#btn-login')
    this.stateButtonLogin(this.button, true, 'Cargando...')

    this.login()

  }

  login() {
    const data = this.form.getRawValue()
  

    this.authService.login(data).subscribe((res: any) => {

      localStorage.setItem('token',res.token)
      this.router.navigate(['/dashboard']);
     
    }, (error) => {

      this.stateButtonLogin(this.button, false, 'Iniciar sesión')
      this.error = true;
      Message.error = this.error
      Message.message = 'Usuario o Contraseña no son correctas'

    }
    )
  }

  stateButtonLogin(button: any, state: boolean, text: string) {
    button.disabled = state;
    button.innerText = text;
  }

  clearError() {
    this.error = false;
  }

}
