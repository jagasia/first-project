import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:string='Jag';
  username:string='';
  password:string='';
  color:string='white';
  gender:string='Male';
  interests:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  fn1()
  {
    alert("username is "+this.username+" and password is "+this.password);
  }

}
