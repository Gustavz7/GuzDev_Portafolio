import { UserData } from './../models/user-data/user-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) { }
  baseUrl: string = "https://gustavo-personal-projects-bucket.s3.amazonaws.com/general-assets";

  //prod
  getUserData(): Observable<UserData> {
    return this.http.get<UserData>(`${this.baseUrl}/data-source/person_summary.json`)
  }

  //dev
  // getUserData(): Observable<UserData> {
  //   return this.http.get<UserData>("../assets/data/person_summary.json")
  // }
}
