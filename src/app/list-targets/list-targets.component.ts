import {Router} from '@angular/router';

declare var require: any;
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-targets',
  templateUrl: './list-targets.component.html',
  styleUrls: ['./list-targets.component.css']
})
export class ListTargetsComponent implements OnInit {
  axios = require('axios');
  // targetList: any[] = [];


  targetList = [
    {
      name : 'Laptop',
      ipAddress : '192.168.1.41',
      status : 'NOT LAUNCHED',

    },
    {
      name : 'Laptop1',
      ipAddress : '192.168.1.42',
      status : 'RUNNING',

    },
    {
      name : 'Laptop3',
      ipAddress : '192.168.1.43',
      status : 'FINISHED',

    }
  ];

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  ngOnInit() {
    this.getAllList();
  }

  launchScan(target, index) {
    this.targetList[index].status = 'RUNNING';
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
      });
  }

  getAllList() {
    this.targetList = [
      {
        name : 'Laptop',
        ipAddress : '192.168.1.41',
        status : 'NOT LAUNCHED',

      },
      {
        name : 'Laptop1',
        ipAddress : '192.168.1.42',
        status : 'RUNNING',

      },
      {
        name : 'Laptop3',
        ipAddress : '192.168.1.43',
        status : 'FINISHED',

      }
    ];
    /*const context = this;
    const url  = 'http://localhost:8090/api/target/';
    this.axios.get(url)
      .then(function(response) {
        // handle success
        context.targetList= response.date;

      })
      .catch(function(error) {
        // handle error
        console.log('error');
      })
      .finally(function() {
        // always executed
      });*/
  }

downloadLastReport(element ) {
  this._router.navigate(['lastReport', 1]);
}

}
