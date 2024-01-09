import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  faLinkedin = faLinkedin;
  constructor() { }

  ngOnInit(): void {
  }

}
