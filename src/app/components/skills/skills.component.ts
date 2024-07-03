import { ApiRequestsService } from 'src/app/services/api-requests.service';
import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { UserSkills } from 'src/app/models/user-data/user-data';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills_data: UserSkills[] = [];

  constructor(private apiRequest: ApiRequestsService) {
  }
  /**
   * Ngx Chart Configuracion
   */
  //view: [number, number] = [0, 0]; //si esta presente el grafico no es responsivo

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'P R O G R A M M I N G';
  xAxisLabel: string = 'Level';
  legendTitle: string = 'Tecnology';
  maxScale: number = 100;
  //colorScheme = "['#0D83BE', '#EAD41C', '#2F72BC', '#F0F0F0', '#D2002F', '#67AA3C']";

  colorScheme: Color = {
    domain: ['#DE4013', '#EAD41C', '#2F72BC', '#F0F0F0', '#D2002F', '#67AA3C'],
    group: ScaleType.Ordinal,
    selectable: true,
    name: 'Customer Usage',
  };

  // Llamada api de los datos
  ngOnInit(): void {
    this.apiRequest.getUserData().subscribe((data) => {
      this.skills_data = data.userSkillsData;
    });
  }
}
