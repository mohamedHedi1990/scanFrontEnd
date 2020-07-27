import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as $ from 'jquery';

@Component({
  selector: 'app-interface-target-report',
  templateUrl: './interface-target-report.component.html',
  styleUrls: ['./interface-target-report.component.css']
})
export class InterfaceTargetReportComponent implements OnInit {
  targetName = '';
  reportId = null;

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.targetName = this.activatedroute.snapshot.paramMap.get('targetName');
    this.reportId = this.activatedroute.snapshot.paramMap.get('id');
    console.log('ngOnInit');
  }

  exportAsPDF() {
    // tslint:disable-next-line:prefer-const
    const data = document.getElementById('reportId');
    const context = this;
    html2canvas(data).then(canvas => {
// Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('last_scan_report.pdf'); // Generated PDF
    });
  }

  getPDF() {
    const data = document.getElementById('reportId');
    const HTMLWidth = $('#reportId').width();
    const HTMLHeight = $('#reportId').height();
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

      pdf.save('last_scan_report.pdf');
    });
  }
}
