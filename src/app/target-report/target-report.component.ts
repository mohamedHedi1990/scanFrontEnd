declare var require: any;
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-target-report',
  templateUrl: './target-report.component.html',
  styleUrls: ['./target-report.component.css']
})
export class TargetReportComponent implements OnInit {
  targetId: string = null;
  axios = require('axios');
  targetReportDto :any = {
    target : {
      name: 'target name',
      status: 'Connected',
    },
    openPorts: 0,
    highVulNum: 0,
    midiumVulNum: 0,
    lowVulNum: 0,
    logVulNum: 0,
    sessionsAfterExploitationNum: 0,
    ports: [
      {
        portid: 1,
        protocol: 'protocol',
        service: 'service',
      },
      {
        portid: 2,
        protocol: 'protocol1',
        service: 'service1',
      }
    ],
    highResults: [
      {
        port: 'port',
        severity: '',
        name: '',
        product: '',
        detection_source_name: '',
        detection_oid: '',
        summary: '',
        installed_version: '',
        fixed_version: '',
        impact: '',
        solutionType: '',
        solution: '',
        affectedSoftware: '',
        vulnerbailityInsight: '',
        details: '',
        oid: '',
        scan_nvt_version: '',
        method: '',
        cve: '',
        bid: '',
        refernces_others: '',
        threat: '',
      }
    ]
  };
  constructor(private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.targetId = this.activatedroute.snapshot.paramMap.get('id');
    console.log('ngOnInit');
  }

  getReport() {
    const context = this;
    const url  = 'http://localhost:8090/api/target/report' + this.targetId ;
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.targetReportDto = response;
          console.log('scan finished');
          // location.href = 'http://localhost:4200/listeMateriels/';
          // context.router.navigate(['listeDedeplacementsNaturels']);
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
