import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  item1: Item = new Item();
  item2: Item = new Item();
  item3: Item = new Item();

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getItem(1).subscribe(response => this.item1 = response);
    this.shopService.getItem(2).subscribe(response => this.item2 = response);
    this.shopService.getItem(3).subscribe(response => this.item3 = response);
  }

}
