import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { BenefitComponent } from './secure/benefit/benefit.component';
import { DetailbenefitComponent } from './secure/benefit/detailbenefit/detailbenefit.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component';
import { WalletComponent } from './secure/wallet/wallet.component';
/* import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { SecureComponent } from './secure/secure.component'; */

const routes: Routes = [
  { path: 'login', component: LoginComponent },


   {
    path: '',
    component: SecureComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'mi-billetera',
        component: WalletComponent
      },
      {
        path: 'incluir-beneficios',
        component: BenefitComponent
      },

      {
        path: 'detalle/:id/beneficio',
        component: DetailbenefitComponent
      },
    ]
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
