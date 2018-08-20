import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 invalidUser = false;
  constructor(private activatedRoute: ActivatedRoute,
              private route : Router) { 

              }

  ngOnInit() {
  }

  loginUser(loginForm: NgForm) {
    let emailID = loginForm.value.emailID;
    let password = loginForm.value.password;

    //Invoke User Service and check if the user is valid or not
    //Valid

    this.route.navigate(['/loadMenus']); 

    //Not valid
    //this.invalidUser = true;
    //this.route.navigate(['']) 
  }
}
