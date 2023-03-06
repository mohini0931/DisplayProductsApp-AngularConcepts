import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'app-alert-pop-up',
  templateUrl: './alert-pop-up.component.html',
  styleUrls: ['./alert-pop-up.component.css']
})
export class AlertPopUpComponent {

    message: string = '';
   constructor(public dialogRef : MatDialogRef<AlertPopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) {
        this.message = data?.message
    }
    close() {
      this.dialogRef.close();
    }
} 
