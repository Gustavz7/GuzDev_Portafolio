import { Component } from '@angular/core';

//icons
import {
  faFacebook,
  faInstagram,
  faDiscord,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

//scroll to sections form toolbar
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'guzdev-portafolio';
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faDiscord = faDiscord;
  faGoogle = faGoogle;

  constructor( private scroller: ViewportScroller) {}
  //funciones de home que redirigen a distintos id de secciones de la pagina
  goToWelcome() {
    this.scroller.scrollToAnchor('welcome');
  }
  goToExperience() {
    this.scroller.scrollToAnchor('experience');
  }
  goToSkills() {
    this.scroller.scrollToAnchor('skills');
  }
  goToProjects() {
    this.scroller.scrollToAnchor('projects');
  }

  goToAboutMe() {
    this.scroller.scrollToAnchor('aboutMe');
  }
}
