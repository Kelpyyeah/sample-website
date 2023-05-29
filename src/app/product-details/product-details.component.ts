import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ShopService } from '../shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentId: number = 0;
  testId: string = '';
  currentItem: Item = new Item();

  constructor(private shopService: ShopService, private actRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.testId = this.actRoute.snapshot.paramMap.get("itemId") ?? '';
    this.currentId = parseInt(this.testId);
    this.shopService.getItem(this.currentId)
      .subscribe(response => this.currentItem = response);
      console.log(this.currentItem)
  }

}
