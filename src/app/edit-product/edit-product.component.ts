import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { ShopService } from '../shop.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit{

  id: number = 0;

    currentItem: Item = new Item();
  
    constructor(private shopService: ShopService, private actRoute: ActivatedRoute, private router: Router) { }
  
    ngOnInit(): void {
        const routeId = this.actRoute.snapshot.paramMap.get("itemId") ?? "";
        this.id = parseInt(routeId);
        this.shopService.getItem(this.id).subscribe(response => {
            console.log(response);
            this.currentItem = response;
        });
    }
  
    onSubmit(){
      this.shopService.editItem(this.id, this.currentItem).subscribe(edittedItem => {
        console.log(edittedItem);
        this.router.navigateByUrl("/products");
      })
    }
}