import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
  sampleData: any[] = [

  ];
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
  xAxis: any =
    {
      dataField: 'creationDate',
      // unitInterval: 1,
      axisSize: 'auto',
      tickMarks: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
      },
      gridLines: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
      },

    };
  valueAxis: any =
    {
      unitInterval: 10,
      minValue: 0,
      maxValue: 120,
      title: { text: 'The total number of vulnerabilities' },
      labels: { horizontalAlignment: 'right' },
      tickMarks: { color: '#BCBCBC' }
    };
  seriesGroups: any[] =
    [
      {
        type: 'stackedcolumn',
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        series: [
          { dataField: 'lowVulNumber', displayText: 'Low', color: '#7FFF00' },
          { dataField: 'mediuimVulNumber', displayText: 'Medium', color: '#FFA500' },
          { dataField: 'heightVulNumber', displayText: 'High', color: '#FF0000' }
        ]
      }
    ];
    axios = require('axios');
  constructor() { }

  ngOnInit() {
        this.getLast12GlobalreportStat();
  }
    getLast12GlobalreportStat() {
        const context = this;
        const url = 'http://localhost:8090/api/target/last-global-report-stat-12/';
        this.axios.get(url)
            .then(function(response) {
                // handle success
                context.sampleData = response.data;
                console.log(' context.sampleData ',  context.sampleData);

            })
            .catch(function(error) {
                // handle error
                console.log('error');
            })
            .finally(function() {
                // always executed
            });

    }
  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

}
