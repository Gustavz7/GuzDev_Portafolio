import { skills_data } from '../../../assets/data/Skills_data';
import { ApiRequestsService } from 'src/app/services/api-requests.service';
import { Component, OnInit } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor(private apiRequest: ApiRequestsService) {
    Object.assign(this, { skills_data });
  }
  /**
   * Ngx Chart Configuracion
   */
  skills_data: any[] | undefined;
  view: [number, number] = [1000, 400];

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

  //* Llamada api de los datos (desuso)
  /*

  api_response = [];
  skills_data: any = [];

  ngOnInit(): void {
    this.apiRequest.getSkillsData().subscribe((data) => {
      this.api_response = Object.values(data);
      this.skills_data = this.api_response[1]
      console.log(this.skills_data);
    });
  }
  */
  ngOnInit(): void {}
}
