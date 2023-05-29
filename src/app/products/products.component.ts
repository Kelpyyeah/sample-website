import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  itemList: Item[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.shopService.getItems().subscribe(response => this.itemList = response);
  }

  search: string = "";
  searchedItems: Item[] = [];
  // "http://localhost:3000/items?q=" + search
  onSubmit(){
    this.shopService.searchItems(this.search).subscribe(response => {
      this.searchedItems = response;
  });
  }

  onDelete(id: number){
    this.shopService.deleteItem(id).subscribe(response => {
        console.log(response);
        this.loadContacts();
    });
}

loadContacts() {
    this.shopService.getItems().subscribe(foundItems => {
        console.log(foundItems);
        this.itemList = foundItems;
    });
}
}
