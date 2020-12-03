import { Component } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  @ViewChild('mySlider') slider: IonSlides;

  slideOpts = {
    initialSlide: 0,
    speed: 450,
    autoplay: true,
    loop:true,
  };

}
