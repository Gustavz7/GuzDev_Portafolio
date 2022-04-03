import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { ApiRequestsService } from 'src/app/services/api-requests.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  faGithub = faGithub;
  faArrowRight = faArrowRight;
  constructor(private apiRequest: ApiRequestsService) {}

  api_response = [];
  projects_data: any = [];

  ngOnInit(): void {
    this.apiRequest.getProjectData().subscribe((data) => {
      (this.api_response = Object.values(data)),
        (this.projects_data = this.api_response[0]);
      console.log(this.projects_data);
    });
  }
}
