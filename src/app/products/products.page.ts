import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
	category:string;
  constructor(private activatedRoute:ActivatedRoute) {
  	this.activatedRoute.paramMap.subscribe(params=>{
  		this.category = params.get('category');
  	})
   }

   title:string;

  ngOnInit() {
  }

  ionViewWillEnter(){
  	this.title = this.category
  }

}
