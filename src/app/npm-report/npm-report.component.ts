import {Component, Input, OnInit} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-npm-report',
  templateUrl: './npm-report.component.html',
  styleUrls: ['./npm-report.component.css']
})
export class NpmReportComponent implements OnInit {
  @Input() target: any = [];
  overview = {
    openPorts : 0,
    highVuln : 0,
    mediumVuln: 0,
    lowVuln: 0,
    logVuln: 0,
    sessions: 0,
  }
  reportHostNpm =   {
    host : {
      ports : [
        {
          protocol : '',
          portid: '',
          service: '',
          state: '',
        },
      ]
    },
  };
  // tslint:disable-next-line:variable-name
  constructor(private _Activatedroute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.target.id = this._Activatedroute.snapshot.paramMap.get('id');
    this.target.ipAddress = this._Activatedroute.snapshot.paramMap.get('ipAddress');
    this.target.name = this._Activatedroute.snapshot.paramMap.get('name');
    this.reportHostNpm. host = {
      ports : [
        {
          protocol : 'TCP',
          portid: '123456',
          service: 'service1',
          state: 'open',
        },
        {
          protocol : 'TCP',
          portid: '123457',
          service: 'service2',
          state: 'open',
        },
        {
          protocol : 'TCP',
          portid: '123456',
          service: 'service3',
          state: 'open',
        },
        {
          protocol : 'UDP',
          portid: '123456',
          service: 'service1',
          state: 'open',
        },
        {
          protocol : 'UDP',
          portid: '123457',
          service: 'service2',
          state: 'open',
        },
        {
          protocol : 'UDP',
          portid: '123456',
          service: 'service3',
          state: 'open',
        }
      ]
    };
  }

  downloadLastReport(target, index) {
    this.target = target;
    /* this.reportHostNpm. tcp_host = {
        ports : [
          {
            protocol : 'TCP',
            portid: '123456',
            service: 'service1',
            state: 'open',
          },
          {
            protocol : 'TCP',
            portid: '123457',
            service: 'service2',
            state: 'open',
          },
          {
            protocol : 'TCP',
            portid: '123456',
            service: 'service3',
            state: 'open',
          }
        ]
      };
    this.reportHostNpm.udp_host = {
        ports : [
          {
            protocol : 'UDP',
            portid: '123456',
            service: 'service1',
            state: 'open',
          },
          {
            protocol : 'UDP',
            portid: '123457',
            service: 'service2',
            state: 'open',
          },
          {
            protocol : 'UDP',
            portid: '123456',
            service: 'service3',
            state: 'open',
          }
        ]
      };


    /*this.targetList[index].status = 'RUNNING';
    const context = this;
    const url  = 'http://localhost:8090/api/target/' + target.name ;
    this.axios.put(url)
      .then(function(response) {
        // handle success
        this.targetList[index].status = 'FINISHED';
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
      });*/
    this.exportAsPDF();
  }

  public exportAsPDF() {
    // this.target = target;


    const data = document.getElementById('npmReport');
    console.log('data ', data);
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });

    /* html2canvas(data).then(canvas => {
       // Few necessary setting options
       const imgWidth = 208;
       const pageHeight = 295;
       const imgHeight = canvas.height * imgWidth / canvas.width;
       const heightLeft = imgHeight;
       const contentDataURL = canvas.toDataURL('image/png');
       const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF

      // const position = 0;
       // pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      // pdf.save('MYPdf.pdf'); // Generated PDF

       alert('file saved');
     });*/
  }

}
