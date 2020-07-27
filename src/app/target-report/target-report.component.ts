declare var require: any;
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-target-report',
  templateUrl: './target-report.component.html',
  styleUrls: ['./target-report.component.css']
})
export class TargetReportComponent implements OnInit {
  @Input() targetName: string = null;
  @Input() reportId: any = null;
  axios = require('axios');
  targetReportDto: any = {
    target: {
      name: 'target name',
      status: 'Connected',
      ipAddress: '',
    },
    sessions: [{
      name: '',
      type: '',
      info: '',
      tunnel: '',
      via: '',
      encrypted: '',
      checkIn: '',
      uuid: '',
      registered: '',
    }],
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
        description: '',
        vulnerbailityDetectionMethod: '',
        cvss_base: '',
      }
    ],
    midiumResults: [
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
        description: '',
        vulnerbailityDetectionMethod: '',
        cvss_base: '',
      }
    ],
    lowResults: [
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
        description: '',
        vulnerbailityDetectionMethod: '',
        cvss_base: '',
      }
    ],
  };

  constructor(private activatedroute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    // this.targetName = this.activatedroute.snapshot.paramMap.get('targetName');
    console.log('ngOnInit');
    if (this.reportId != null) {
      this.getReportById();
    } else {
      this.getReport();
    }

  }

  getReport() {
    console.log('target name ', this.targetName);
    const context = this;
    console.log('Last report for target ', this.targetName);
    const url = 'http://localhost:8090/api/target/report/' + this.targetName;
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.targetReportDto = response.data;
          console.log('last report was retrieved');
        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });

  }

  getReportById() {
    const context = this;
    console.log('Last report by id  ', this.reportId);
    const url = 'http://localhost:8090/api/target/reportId/' + this.reportId;
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.targetReportDto = response.data;
          console.log('last report was retrieved');
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
