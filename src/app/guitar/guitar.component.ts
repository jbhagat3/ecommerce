import { Component, OnInit } from '@angular/core';
import data from '../data/data';
import { GuitarItem } from '../models/guitar-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})
export class GuitarComponent implements OnInit {
  guitaritems:GuitarItem[];
  constructor() {
    this.guitaritems = data.guitars;
    console.log(this.guitaritems);
    console.log(data);
   }

  ngOnInit() {
  }

}
