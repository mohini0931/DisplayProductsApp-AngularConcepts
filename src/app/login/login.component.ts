import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../service/login.service';
import { BehaviorSubject } from "rxjs";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AlertPopUpComponent } from '../shared-components/alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  user: any;
  userExist:any = '';

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog){}

  ngOnInit(){
    this.loginService.getUserDetails().subscribe(data => {
      this.user = data;
    });
  }
    
  displayProducts() {
    // TODO: Use EventEmitter with form value
    console.log(this.loginForm.value);
    if(this.loginForm?.value?.username && this.loginForm.value?.password && this.user.length > 0){
      this.userExist = this.user.find((val:any) => {
          return (val.username === this.loginForm?.value?.username &&
             val.password === this.loginForm.value?.password);
      })
    }
    console.log("userexist="+this.userExist);
    if(this.userExist && this.userExist !== '') {
      this.loginService.setLoginEvent(true);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.data = { message: 'Logged In Successfully' };
      const dialogRef = this.dialog.open(AlertPopUpComponent, dialogConfig);
      this.router.navigate(['/products']);
    }else{
      alert("Invalid Credentials");
    }
  }
}
