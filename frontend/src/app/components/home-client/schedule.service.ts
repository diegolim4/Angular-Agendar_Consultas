import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './../../clientes/shared/cliente';
import { Client } from './schedule.model';

@Injectable({
  providedIn: 'root'
})
export class NewScheduleService {

  baseUrl = 'http://localhost:5000/clients'

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMsg(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
    })
  }

  create(schedule: Client): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, schedule)
  }

}
