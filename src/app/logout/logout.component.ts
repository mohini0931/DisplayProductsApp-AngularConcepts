import { Component } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
  constructor(private loginService: LoginService,
    private router: Router){
    this.loginService.setLoginEvent(false);
    alert("Logged Out");
    this.router.navigate(['/login']);
  }
}
