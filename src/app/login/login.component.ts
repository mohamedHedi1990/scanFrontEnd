declare var require: any;
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  API_USER = 'http://localhost:8090/user/';

  isAuth = false;
  username = '';
  password = '';
  axios = require('axios');
  ngOnInit() {
  }

  login() {
    location.href = 'http://localhost:4200/acceuil';


   /* const context = this;


    const url  = this.API_USER + 'isFound' ;
    this. axios.post(url, { login: this.username, password: this.password}, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function(response) {
        console.log('userrrrr', response.data);
        if (response.data.id != null) {
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          // context.router.navigate(['/ecranAcceuil']);
          if (response.data.isAdmin === true) {
            // location.href = 'http://localhost:4200/adminConge/';
            location.href = 'http://localhost:4200/acceuil';
          } else {
            location.href = 'http://localhost:4200/acceuil';
          }

        }

      })
      .catch(function(error) {
        console.log(error);
      })
      .finally(function() {
        // always executed
      });*/
  }
}
