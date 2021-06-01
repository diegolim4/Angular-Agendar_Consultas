import { Component, OnInit } from '@angular/core';
import { NewScheduleService } from '../home-client/schedule.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-schedule',
  templateUrl: './create-schedule.component.html',
  styleUrls: ['./create-schedule.component.css']
})
export class CreateScheduleComponent implements OnInit {

  constructor(private scheduleService: NewScheduleService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createSchedule(): void {
    this.scheduleService.showMsg('Consulta marcada')
  }

  cancelSchedule(): void {
    this.router.navigate(['/home-client'])
  }

}
