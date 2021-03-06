declare var require: any;
import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-target-report-details',
    templateUrl: './target-report-details.component.html',
    styleUrls: ['./target-report-details.component.css']
})
export class TargetReportDetailsComponent implements OnInit {

    @Input() reportId = null;
    axios = require('axios');
    @Input() number = null;
    targetReportDto: any = {
      id: null,
        target: {
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
            }
        ]
    };

    constructor(private activatedroute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        // this.reportId = this.activatedroute.snapshot.paramMap.get('reportId');
        console.log('ngOnInit');
        this.getReport();
        if ( this.number == null) {
            this.number = 1;
        } else {
            this.number = this.number + 1;
        }
    }

    getReport() {
        const context = this;
        console.log('Last report for target ', this.reportId);
        const url = 'http://localhost:8090/api/target/reportId/' + this.reportId;
        this.axios.get(url)
            .then(function(response) {
                // handle success
                context.targetReportDto = response.data;
                console.log('last report was retrieved ', response.data);
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
