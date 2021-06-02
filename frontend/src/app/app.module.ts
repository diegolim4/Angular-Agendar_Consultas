import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthComponent } from './account/shared/auth/auth.component';
import { HomeComponent } from './components/template/home/home.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeClientComponent } from './components/home-client/home/home-client.component';
import { CreateScheduleComponent } from './components/create-schedule/create-schedule.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CreateAccountComponent,    
    AuthComponent,
    HomeComponent,
    HomeClientComponent,
    CreateScheduleComponent 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule, 
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatSnackBarModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
