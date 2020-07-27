import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
// Pie
  public pieChartLabels: string[] = ['Low', 'Medium', 'High'];
  public pieChartData: number[] = [];
  public chartColors: any[] = [
    {
      backgroundColor: ['#7FFF00', '#FFA500', '#FF0000']
    }];
  public pieChartType = 'pie';
  public title = 'Vulnerabilities statistics of last global scan';
  axios = require('axios');
  constructor() { }

  ngOnInit() {
    this.getLastGlobalreportStat();
  }


  getLastGlobalreportStat() {
    const context = this;
    const url = 'http://localhost:8090/api/target/last-global-report-stat/';
    this.axios.get(url)
        .then(function(response) {
          // handle success
            console.log('resposne  ', response);
            context.pieChartData.push(response.data.lowVulNumber);
            context.pieChartData.push(response.data.mediuimVulNumber);
            context.pieChartData.push(response.data.heightVulNumber);
            context.title = context.title + response.data.creationDate;
        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });

  }



  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
