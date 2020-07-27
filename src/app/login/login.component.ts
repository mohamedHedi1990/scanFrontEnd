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
  wrongLogin = false;
  username = '';
  password = '';
  axios = require('axios');
  ngOnInit() {
  }

  login() {



    const context = this;


    const url  = 'http://localhost:8090/api/user/' + this.username + '/' + this.password ;
    this. axios.get(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(function(response) {
        if (response.data != null && response.data.id != null) {
          localStorage.setItem('currentUser', JSON.stringify(response.data));
          // context.router.navigate(['/ecranAcceuil']);
          location.href = 'http://localhost:4200/acceuil';

        } else {
          context.wrongLogin = true;
        }

      })
      .catch(function(error) {
        console.log(error);
        context.wrongLogin = true;
      })
      .finally(function() {
        // always executed
      });
  }
}
