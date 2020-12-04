import { Component } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ViewChild } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router) {}

  @ViewChild('mySlider') slider: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 450,
    autoplay: true,
    loop:true,
  };

  goCategory(category){
    this.router.navigate(['products/'+category]);
  }

}
