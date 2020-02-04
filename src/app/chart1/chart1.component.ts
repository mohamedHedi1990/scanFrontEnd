import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {
  sampleData: any[] = [
    { Day: 'January', Low: 30, Medium: 0, High: 25 },
    { Day: 'February', Low: 25, Medium: 25, High: 0 },
    { Day: 'March', Low: 30, Medium: 0, High: 25 },
    { Day: 'April', Low: 35, Medium: 25, High: 45 },
    { Day: 'May', Low: 0, Medium: 20, High: 25 },
    { Day: 'June', Low: 30, Medium: 0, High: 30 },
    { Day: 'July', Low: 60, Medium: 45, High: 0 },
    { Day: 'August', Low: 0, Medium: 20, High: 25 },
    { Day: 'September', Low: 30, Medium: 0, High: 30 },
    { Day: 'October', Low: 60, Medium: 45, High: 0 },
    { Day: 'November', Low: 0, Medium: 20, High: 25 },
    { Day: 'December', Low: 30, Medium: 0, High: 30 }
  ];
  padding: any = { left: 5, top: 5, right: 5, bottom: 5 };
  titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
  xAxis: any =
    {
      dataField: 'Day',
      unitInterval: 1,
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
      }
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
          { dataField: 'Low', displayText: 'Low', color: '#7FFF00' },
          { dataField: 'Medium', displayText: 'Medium', color: '#FFA500',  },
          { dataField: 'High', displayText: 'High', color: '#FF0000' }
        ]
      }
    ];
  constructor() { }

  ngOnInit() {
  }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

}
