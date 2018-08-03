import { Component, Testability } from '@angular/core';
import { SiriUser } from './app.user.model';


@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
 //template:`This is test`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 



      whichClass : string = "Angular Class"

      MyArr: number[] = [1,3,5,7,9]

      siriUserValue : SiriUser = {
        userID: 1,
        fname: 'steve Jobs',
        userName: 'Steve',
        isAdmin: true,
        emailID: 'steve@gmail.com',
        dob: new Date 
      }

      siriUserValueArr : SiriUser[] = [{
        userID: 1,
        fname: 'steve Jobs',
        userName: 'Steve',
        isAdmin: true,
        emailID: 'steve@gmail.com',
        dob: new Date 
      } , {
        userID: 1,
        fname: 'steve Jobs9',
        userName: 'Steve9',
        isAdmin: false,
        emailID: 'steve9@gmail.com',
        dob: new Date 
      } , {
        userID: 1,
        fname: 'steve Jobs99',
        userName: 'Steve99',
        isAdmin: true,
        emailID: 'steve99@gmail.com',
        dob: new Date 
      }]

      password : string = "siri"
      passwordBtn : string = "Btn"

      userNameValue: string = "apple"

      inputEventHandler(event) {
        //console.log(event.target.value);
        this.password = event.target.value;
      }

      inputEventHandlerButton(inputEle) {
        this.passwordBtn = inputEle.value;
      }

 }
  
