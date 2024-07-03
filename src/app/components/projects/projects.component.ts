import { Person, UserData, Project } from './../../models/user-data/user-data';
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
  constructor(private apiRequest: ApiRequestsService) { }

  person_data: Person = new Person(); // los datos personales de la persona
  projects_data: Project[] = []; //los proyectos de la persona
  isReady: boolean = false;

  enableDemo(item: any) {
    let disable = true;
    if (item.demo_source !== "") {
      disable = false;
    }
    return disable;
  }
  ngOnInit(): void {
    this.apiRequest.getUserData().subscribe((data: UserData) => {
      this.person_data = data.person;
      this.projects_data = data.projects;
      if (this.projects_data.length != 0) {
        this.isReady = true;
      }
    });
  }
}
