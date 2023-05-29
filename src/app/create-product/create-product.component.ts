import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ShopService } from '../shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {

  newItem: Item = new Item();

  constructor(private shopService: ShopService, private router: Router) { }
  

    onSubmit() {
      this.shopService.createItem(this.newItem).subscribe(response => {
          console.log(response);
          this.router.navigateByUrl("/products");
      });
  };

}
