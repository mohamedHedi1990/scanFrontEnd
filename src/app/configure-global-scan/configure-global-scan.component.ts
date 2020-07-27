import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {DatePipe} from '@angular/common';
declare var require: any;

@Component({
  selector: 'app-configure-global-scan',
  templateUrl: './configure-global-scan.component.html',
  styleUrls: ['./configure-global-scan.component.css']
})
export class ConfigureGlobalScanComponent implements OnInit {
  showMessage = false;
  axios = require('axios');
    inputConfiguration = null;
  configuration = new FormGroup({
      beginDate: new FormControl(''),
    heure: new FormControl(''),
      minutes: new FormControl(''),
      occurrence: new FormControl('DAILY'),
  });
  minDate = null;
  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    this.initInputConfiguration();
    this.minDate = new Date();
    this.configuration.controls.beginDate.setValue(this.now('yyyy-MM-dd'));
  }
    now(format: string): string {

        return this.datePipe.transform(new Date().toLocaleDateString('en-US', {timeZone: 'Africa/Tunis'}) +
            ' ' + new Date().toLocaleTimeString('en-US', {timeZone: 'Africa/Tunis'}), format, 'Africa/Tunis');

    }

    initInputConfiguration() {
        const context = this;
        const url  = 'http://localhost:8090/api/target/global-configuration';
        this. axios.get(url)
            .then(function(response) {
            context.inputConfiguration = response.data;
            context.configuration.controls.beginDate.setValue( context.inputConfiguration.beginDate);
            context.configuration.controls.heure.setValue(context.inputConfiguration.heure);
            context.configuration.controls.minutes.setValue(context.inputConfiguration.minutes);
            context.configuration.controls.occurrence.setValue(context.inputConfiguration.occurrence);

            })
            .catch(function(error) {
                console.log(error);
            });
    }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const context = this;
    const url  = 'http://localhost:8090/api/target/configure-global-scan';
    this. axios.post(url, this.configuration.value)
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
