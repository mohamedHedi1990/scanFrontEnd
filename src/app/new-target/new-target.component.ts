declare var require: any;
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-new-target',
  templateUrl: './new-target.component.html',
  styleUrls: ['./new-target.component.css']
})
export class NewTargetComponent implements OnInit {

  axios = require('axios');

  showMessage = false;

  targetForm = new FormGroup({
    name: new FormControl(''),
    ipAddress: new FormControl(''),
  });
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    const context = this;
    console.log('target form:  ', this.targetForm.value);
    const url  = 'http://localhost:8090/api/target/';
    this. axios.post(url, this.targetForm.value)
      .then(function(response) {
        console.log('success target save with response ', response);
        context.showMessage = true;
        setTimeout(function() {
          context.showMessage = false;
          // location.href = 'http://localhost:4200/listeMateriels';
        }, 3000);

      })
      .catch(function(error) {
        console.log(error);
      });
  }

}
