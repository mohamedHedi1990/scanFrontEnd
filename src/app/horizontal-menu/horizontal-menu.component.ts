declare var require: any;
import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.css']
})
export class HorizontalMenuComponent implements OnInit {
  axios = require('axios');
  completeName = null;
  illustrationUrl = null;
  currentDate = new Date();
  currentUserString = localStorage.getItem('currentUser');
  currentUser = JSON.parse(this.currentUserString);
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
}
  /*deconnecter() {
    const context = this;
    const url  = 'http://localhost:8090/user/deconnect/' + this.currentUser.id;
    this.axios.put(url, {
      headers: {
        Authorization: 'Basic ' + context.currentUser.autorization,
      }
    })
      .then(function(response) {
        // handle success
        console.log('success');
        location.href = 'http://localhost:4200/';
        // context.router.navigate(['listeDedeplacementsNaturels']);
      })
      .catch(function(error) {
        // handle error
        console.log('error');
      })
      .finally(function() {
        // always executed
      });


  }*/
  deconnecter() {
    location.href = 'http://localhost:4200/';
  }


}
