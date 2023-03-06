import { Component } from '@angular/core';
import { LoginService } from './service/login.service';
import { BnNgIdleService } from "bn-ng-idle";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'AngularPracticeApp';
  menuFlag: boolean = false;
  loginFlag:boolean = false;

  constructor(private loginService: LoginService,
    private idleService: BnNgIdleService,
    private router: Router) {
      this.loginService.getLoginEvent().subscribe(e => {
          this.loginFlag = e == 1 ? true : false;
      })
  }

  ngOnInit() {
     this.idleService.startWatching(60).subscribe((res) => {
       alert("Session Expired");
       this.router.navigate(['/login']);
     }); 
  }

  openMenu(){
    this.menuFlag = !this.menuFlag;
  }

  
}
