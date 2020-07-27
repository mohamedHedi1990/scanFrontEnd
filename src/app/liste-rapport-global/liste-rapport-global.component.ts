import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-liste-rapport-global',
  templateUrl: './liste-rapport-global.component.html',
  styleUrls: ['./liste-rapport-global.component.css']
})
export class ListeRapportGlobalComponent implements OnInit {
  axios = require('axios');
  reports = [];
  selectedReport = null;
  showDetails = false;
  constructor() { }

  ngOnInit() {
    this.getAllReports();
  }

  getAllReports() {
    const context = this;
    const url  = 'http://localhost:8090/api/target/global-report/';
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.reports = response.data;
          console.log('global reports were succeussfully retrieved');
          console.log('global reports ', response.data);

        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });
  }

  view(report) {
    this.showDetails = true;
    this.selectedReport = report;
  }

  cancelView() {
      this.showDetails = false;
      this.selectedReport = null;
  }
}
