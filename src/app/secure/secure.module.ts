import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet/wallet.component';
import { RecognitionComponent } from './recognition/recognition.component';
import { PostComponent } from './post/post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomModule } from '../custom/custom.module';
import { BenefitComponent } from './benefit/benefit.component';
import { DetailbenefitComponent } from './benefit/detailbenefit/detailbenefit.component';



@NgModule({
  declarations: [
    SecureComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    WalletComponent,
    RecognitionComponent,
    PostComponent,
    BenefitComponent,
    DetailbenefitComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CustomModule,
  ],exports: [
    SecureComponent
  ]
})
export class SecureModule { }
