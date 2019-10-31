import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDescInterface } from 'src/app/interfaces/product-desc.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  product: ProductDescInterface;
  productId: string;

  constructor(private route: ActivatedRoute,
              public productService: ProductsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        console.log(params);
        this.productService.getProduct(params['id'])
          .subscribe((prod: ProductDescInterface) => {
            this.productId = params['id'];
            // console.log("GETTING PRODUCT BY ID", params['id'], prod);
            this.product = prod;
          });
      });
  }

}
