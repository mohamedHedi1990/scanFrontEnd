import {Router} from '@angular/router';

declare var require: any;
import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-list-reports',
  templateUrl: './list-reports.component.html',
  styleUrls: ['./list-reports.component.css']
})
export class ListReportsComponent implements OnInit {
  axios = require('axios');
  @Input() targetName: null;
  reports = [
    {
      name : 'Laptop',
      creationDate : '',
    },
      ]
  constructor(private router: Router) { }

  ngOnInit() {
    this.getAllReports();
  }

  download(report) {
    this.router.navigate(['report', report.id]);
  }

  getAllReports() {
    const context = this;
    const url  = 'http://localhost:8090/api/target/report/all/' + this.targetName;
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.reports = response.data;
          console.log('target list was successufully charged');
          console.log('reports ', response.data);

        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });
  }


}
