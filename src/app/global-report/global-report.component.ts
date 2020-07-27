import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare var require: any;
import * as $ from 'jquery';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-global-report',
  templateUrl: './global-report.component.html',
  styleUrls: ['./global-report.component.css']
})
export class GlobalReportComponent implements OnInit {

 reportId: any = null;
  @Output() hideMachineCapabilityCardEntriesWindowEvent = new EventEmitter();
  axios = require('axios');
  @Input() globalReport = null;

  constructor() { }

  ngOnInit() {
    // this.getGlobalreportById();

  }

  getGlobalreportById() {
    const context = this;
    const url = 'http://localhost:8090/api/target/global-report/' + this.reportId;
    this.axios.get(url)
        .then(function(response) {
          // handle success
          context.globalReport = response.data;
          console.log('global report was retrieved');
        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });

  }

  cancelView() {
      this.hideMachineCapabilityCardEntriesWindowEvent.emit();
  }

    getPDF() {
        const data = document.getElementById('reportIdGlobal');
        const HTMLWidth = $('#reportIdGlobal').width();
        const HTMLHeight = $('#reportIdGlobal').height();
        const topleftmargin = 15;
        const PDFWidth = HTMLWidth + (topleftmargin * 2);
        const PDFHeight = (PDFWidth * 1.5) + (topleftmargin * 2);
        const canvasimagewidth = HTMLWidth;
        const canvasimageheight = HTMLHeight;

        const totalPDFPages = Math.ceil(HTMLHeight / PDFHeight) - 1;


        html2canvas(data, {allowTaint: true}).then(function(canvas) {
            canvas.getContext('2d');

            console.log(canvas.height + '  ' + canvas.width);


            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            const pdf = new jsPDF('p', 'pt',  [PDFWidth, PDFHeight]);
            pdf.addImage(imgData, 'JPG', topleftmargin, topleftmargin, canvasimagewidth, canvasimageheight);


            for (let i = 1; i <= totalPDFPages; i++) {
                pdf.addPage(PDFWidth, PDFHeight);
                pdf.addImage(imgData, 'JPG', topleftmargin, -(PDFHeight * i) + (topleftmargin * 4), canvasimagewidth, canvasimageheight);
            }

            pdf.save('global_report.pdf');
        });
    }
}
