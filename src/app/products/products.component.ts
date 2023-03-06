import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productsDetails: any = [];  
  displayProdDetails: boolean = false;
  selectedCard: any;
  eventDetails: any;
  images = [
    {title: 'First Slide', short: 'First Slide Short', src: "../../assets/credit-card.png"},
    {title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500"},
    {title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500"}
  ];
   
  constructor(config: NgbCarouselConfig,
    private productsService: LoginService) {
    config.interval = 0;
      config.keyboard = true;
     config.showNavigationArrows = true;
     config.showNavigationIndicators = false;
     config.animation = true;
     config.wrap = false;
  }

  ngOnInit(){
    this.productsService.getCardDetails().subscribe(data => {
        this.productsDetails = data;
    })
  }
  getProductDetails(card:any) {
   
      this.displayProdDetails = true;
      this.selectedCard = card;
   
  }
  onSlide(slideEvent: NgbSlideEvent) {
    
   if(slideEvent?.paused === false){
     this.displayProdDetails = false;
   }
   else{
    this.displayProdDetails = true;
   }
  }
}


