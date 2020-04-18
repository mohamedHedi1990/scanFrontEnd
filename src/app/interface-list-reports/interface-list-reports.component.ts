import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-interface-list-reports',
  templateUrl: './interface-list-reports.component.html',
  styleUrls: ['./interface-list-reports.component.css']
})
export class InterfaceListReportsComponent implements OnInit {
targetName = '';
  constructor(private router: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this.targetName = this.activatedroute.snapshot.paramMap.get('targetName');
  }

}
