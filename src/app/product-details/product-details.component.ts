import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertPopUpComponent } from '../shared-components/alert-pop-up/alert-pop-up.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() card: any;
 
  constructor(
    private router: Router,
    private dialog: MatDialog,
   ){
    console.log("card="+this.card);
  }

  applyCard(card:any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { message: 'Credit Card Application is Submitted' };
    const dialogRef = this.dialog.open(AlertPopUpComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((res) => {
    //     this.router.navigate(['/products']);
    // });
  }
}
