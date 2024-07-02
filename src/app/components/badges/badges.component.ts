import { ApiRequestsService } from 'src/app/services/api-requests.service';
import { badge, UserData } from '../../models/user-data/user-data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class badgesComponent implements OnInit {

  constructor(private apiRequest: ApiRequestsService) {}
  badge_list: badge[] = [];

  
  ngOnInit(): void {
    this.apiRequest.getUserData().subscribe((data: UserData) => {
      this.badge_list = data.badges;
    });
  }


}
