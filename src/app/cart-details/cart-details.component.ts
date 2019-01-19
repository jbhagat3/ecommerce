import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuitarItem } from '../models/guitar-item';
import data from '../data/data';
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  item: GuitarItem;
  id:number
  constructor(private _aRoute: ActivatedRoute) {
    this.id= Number(this._aRoute.snapshot.params['id']);
    this.item = data.guitars.find((item: GuitarItem) => {
    return item.id === this.id;
})
   }

  ngOnInit() {
  }

}
