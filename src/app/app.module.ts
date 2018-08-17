import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { LoginComponent } from './authintication/login/login.component';
import { RegisterComponent } from './authintication/register/register.component';
import { ForgetPasswordComponent } from './authintication/forget-password/forget-password.component';
import { NavbarComponent } from './heade-footer/navbar/navbar.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { CreatComponent } from './creat/creat.component';


const UserRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'dasbord', component: DashbordComponent },
  { path: 'create', component: CreatComponent },
  { path: '', redirectTo: '/dasbord', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    NavbarComponent,
    DashbordComponent,
    CreatComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(UserRoutes), FormsModule, ReactiveFormsModule , NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
