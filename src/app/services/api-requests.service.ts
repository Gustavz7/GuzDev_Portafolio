import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http:HttpClient) { }

  baseUrl:string = "assets/";

  getProjectData():Observable<any>{
    return this.http.get(`${this.baseUrl}/data.json`)
  }

  getSkillsData():Observable<any>{
    return this.http.get(`${this.baseUrl}/skills_data.json`)

  }
}
