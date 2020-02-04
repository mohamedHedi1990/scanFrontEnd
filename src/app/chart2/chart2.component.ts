import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
// Pie
  public pieChartLabels: string[] = ['Low', 'Medium', 'High'];
  public pieChartData: number[] = [40, 20, 3];
  public chartColors: any[] = [
    {
      backgroundColor: ['#7FFF00', '#FFA500', '#FF0000']
    }];
  public pieChartType = 'pie';
  public title = 'Vulnerabilities detected in the global report of date : 31 - 12 -2019';
  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
