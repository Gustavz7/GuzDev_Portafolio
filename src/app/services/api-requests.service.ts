import { UserData } from './../models/user-data/user-data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http:HttpClient) { }

  //prod -> assets/data
  baseUrl:string = "/assets/data"; 

  getUserData():Observable<UserData>{
    return this.http.get<UserData>(`${this.baseUrl}/data.json`)
  }
}
