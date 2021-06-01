import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NewScheduleService {

  constructor(private snackBar: MatSnackBar) { }

  showMsg(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration:2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      
    })
  }
}
