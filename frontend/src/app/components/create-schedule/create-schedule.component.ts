import { Component, OnInit } from '@angular/core';
import { NewScheduleService } from '../home-client/schedule.service';
import { Router } from '@angular/router'
import { Client } from '../home-client/schedule.model';

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  schedule: Client = {
    name: '',
    specialist:'',
    date: NaN,
    hour: NaN    
  }

  constructor(private scheduleService: NewScheduleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSchedule(): void {

    this.scheduleService.create(this.schedule).subscribe(()=>{
      this.scheduleService.showMsg('Consulta marcada')
      this.router.navigate(['/home-client'])
    })    
  }

  cancelSchedule(): void {
    this.router.navigate(['/home-client'])
  }

}
