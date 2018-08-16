import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myRegistrationForm: FormGroup;
  constructor() { 

  }

  ngOnInit() {
    this.myRegistrationForm = new FormGroup({
      'email' : new FormControl(null, [Validators.email, Validators.required],[this.checkIfEmailAvailable.bind(this)]),
      'password' : new FormControl(null),
      'city' : new FormControl(null),
    })
  }


  registerTheUser() {
    console.log("User" , this.myRegistrationForm)
  }


  checkIfEmailAvailable(control: FormControl) : Promise<any> {
    const promise = new Promise<any> ((resolve, reject) => {
      let emailValue: string = control.value;
      let returnValue = null;
      console.log("Email ID : " , emailValue)
      console.log(emailValue.indexOf('test@test.com'))
      setTimeout(() => {
        if(emailValue.indexOf('test@test.com') === -1) {
          resolve({'emailValidationError': true});
        } 
        resolve(null);
      }, 10000);
    })    
    return promise;
    
  }
 

}
