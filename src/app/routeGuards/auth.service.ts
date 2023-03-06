import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { tap, delay } from "rxjs/operators";
import { LoginService } from "../service/login.service";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loginFlag: boolean = false;
    loggedInTime: any;
    constructor(private loginService:LoginService) {
        this.loginService.getLoginEvent().subscribe(e => {
            this.loginFlag = e == 1 ? true : false;
        })
    }
    login() {
        if(this.loginFlag === true) {
            this.loggedInTime = new Date().toLocaleTimeString();
            console.log(this.loggedInTime);
        }
        return this.loginFlag === true? true : false;
    }
    logout() {
        this.loginFlag = false;
    }
    sessionExpired(){
        
    }

}