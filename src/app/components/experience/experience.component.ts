import { Experience } from './../../models/user-data/user-data';
import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/models/user-data/user-data';
import { ApiRequestsService } from 'src/app/services/api-requests.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  constructor(private apiRequest: ApiRequestsService) {}

  fechaTest: string = '2022-07-19T23:11:06.000+00:00'; //ejemplo
  exp_data: Experience[] = [];

  //Date process
  current_date: Date = new Date();
  start_date: Date = new Date();
  end_date: Date = new Date();
  exp_total: string = '';

  isActualJob(item: any) {
    if (item.end_date == '') {
      return true;
    } else {
      return false;
    }
  }

  //Calcula la cantidad de dias desde que se empezo el trabajo hasta su fin o fecha actual, devuelve los dias
  calcDays(item: any) {
    this.start_date = new Date(item.start_date);
    this.end_date = new Date();
    if (item.end_date !== '') {
      this.end_date = new Date(item.end_date); //Traspaso fecha desde string a Date
    }
    let amount_of_time = this.end_date.getTime() - this.start_date.getTime();
    return (amount_of_time / (1000 * 3600 * 24)).toFixed(0);
  }

  generateTotalTime(item: any) {
    return this.calculateTimimg(this.calcDays(item));
  }

  calculateTimimg(d: any) {
    let months = 0,
      years = 0;
    let response = '';
    while (d) {
      if (d >= 365) {
        years++;
        d -= 365;
      } else if (d >= 30) {
        months++;
        d -= 30;
      } else {
        d -= 1;
      }
    }
    if (years != 0) {
      response = years + ' Years ';
    }
    if (months != 0) {
      response = response + months + ' Months';
    }
    return response;
  }
  calculateTotalTimming() {
    let total_days = 0;
    this.exp_data.forEach((e) => {
      total_days = total_days + Number.parseInt(this.calcDays(e));
    });
    this.exp_total = this.calculateTimimg(total_days);
  }

  ngOnInit(): void {
    this.apiRequest.getUserData().subscribe((data: UserData) => {
      this.exp_data = data.job_experience;
      this.calculateTotalTimming();
    });
  }
}
