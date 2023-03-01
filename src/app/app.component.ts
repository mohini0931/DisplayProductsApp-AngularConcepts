import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPracticeApp';
  menuFlag: boolean = false;

  openMenu(){
    this.menuFlag = !this.menuFlag;
  }
}
