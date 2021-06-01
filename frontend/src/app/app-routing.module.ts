import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './account/shared/auth.guard';
import { HomeComponent } from './components/template/home/home.component';
import { HomeClientComponent } from './components/home-client/home-client.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
},

{
  path: '',
  component: LoginComponent,
},

{
  path: 'create-account',
  component: CreateAccountComponent,
},

{
  path: 'home-client',
  component: HomeClientComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
