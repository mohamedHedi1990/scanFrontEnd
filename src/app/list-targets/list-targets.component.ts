import {Router} from '@angular/router';

declare var require: any;
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-list-targets',
  templateUrl: './list-targets.component.html',
  styleUrls: ['./list-targets.component.css']
})
export class ListTargetsComponent implements OnInit {
  axios = require('axios');
  // targetList: any[] = [];

  selectedTarget = this;
  showMessage = false;
  showMessagedelete = false;
  targetForm = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(null),
    ipAddress: new FormControl(''),
  });
  showEdit = false;
  targetList = [
    {
      name : 'Laptop',
      ipAddress : '192.168.1.41',
      scan_status : 'NOT_STARED',

    },
    {
      name : 'Laptop1',
      ipAddress : '192.168.1.42',
      scan_status : 'RUNNING',

    },
    {
      name : 'Laptop3',
      ipAddress : '192.168.1.43',
      scan_status : 'FINISHED',

    }
  ];

  // tslint:disable-next-line:variable-name
  constructor(private _router: Router) { }

  ngOnInit() {
    this.getAllList();
  }

  launchScan(target, index) {
    this.targetList[index].scan_status = 'RUNNING';
    const context = this;
    const url  = 'http://localhost:8090/api/target/' + target.name ;
    this.axios.put(url)
      .then(function(response) {
        // handle success
        this.targetList[index].scan_status = response;
        console.log('scan finished');
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
    /*this.targetList = [
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
    ];*/
    const context = this;
    const url  = 'http://localhost:8090/api/target/';
    this.axios.get(url)
      .then(function(response) {
        // handle success
        console.log('response ', response);
        context.targetList = response.data;
        console.log('target list was successufully charged');

      })
      .catch(function(error) {
        // handle error
        console.log('error');
      })
      .finally(function() {
        // always executed
      });
  }

downloadLastReport(element ) {
  this._router.navigate(['lastReport', element.name]);
}

viewAllReports(element) {
  this._router.navigate(['allReports', element.name]);
}

  editTarget(element) {
    this.targetForm.controls.name.setValue( element.name);
    this.targetForm.controls.ipAddress.setValue( element.ipAddress);
    this.targetForm.controls.id.setValue( element.id);
    this.showEdit = true;

  }

  deleteTarget(element) {
    const context = this;
    const url  = 'http://localhost:8090/api/target/' + element.id;
    this.axios.delete(url)
        .then(function(response) {
          console.log('target was successufully deleted');
          context.getAllList();
          context.showMessagedelete = true;
          setTimeout(function() {
            context.showMessagedelete = false;
            // location.href = 'http://localhost:4200/listeMateriels';
          }, 3000);
        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });
  }

  initTargerForm() {
    this.targetForm.controls.name.setValue( '');
    this.targetForm.controls.ipAddress.setValue( '');
    this.targetForm.controls.id.setValue( null);
  }

  launchGlobalScan() {
    this.targetList.forEach(target => {
      target.scan_status = 'RUNNING';
    });
    const context = this;
    const url  = 'http://localhost:8090/api/target/global-report';
    this.axios.post(url)
        .then(function(response) {
          // handle success
          context.targetList.forEach(target => {
            target.scan_status = 'FINISHED';
          });
          console.log('scan finished');
        })
        .catch(function(error) {
          // handle error
          console.log('error');
        })
        .finally(function() {
          // always executed
        });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    const context = this;
    console.log('target form:  ', this.targetForm.value);
    const url  = 'http://localhost:8090/api/target/';
    this. axios.post(url, this.targetForm.value)
        .then(function(response) {
          console.log('success target modification with response ', response);
          context.showMessage = true;
          setTimeout(function() {
            context.showMessage = false;
            context.showEdit = false;
            context.initTargerForm();
            // location.href = 'http://localhost:4200/listeMateriels';
          }, 3000);

        })
        .catch(function(error) {
          console.log(error);
        });
  }

}
