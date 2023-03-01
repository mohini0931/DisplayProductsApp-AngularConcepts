import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit{
  userDetails: any;
  registerForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  });
  constructor(private loginService: LoginService,
    private router: Router) {}
  ngOnInit() {
    this.loginService.getUserDetails().subscribe(userData => {
        this.userDetails = userData? userData : [];
    })
  }
  registerUser() {
    // TODO: Use EventEmitter with form value
    let userObj: any = {};
    let length;
    console.log(this.registerForm.value);
    console.log("userdetails="+this.userDetails);
    if(this.userDetails.length > 0 && this.registerForm.status === 'VALID') {
          length = this.userDetails.length;
          userObj.id = this.userDetails[length - 1].id + 1;
          userObj.email = this.registerForm?.value?.email;
          userObj.username = this.registerForm?.value?.username;
          userObj.password = this.registerForm?.value?.password;
    }
    console.log("userobj="+JSON.stringify(userObj));
    if(userObj) {
      this.loginService.postRegister(userObj).subscribe(res => {
        console.log("result="+res);
        alert('Registered Successfully');
        this.router.navigate(['/login']);
      })
    }
  }
}
