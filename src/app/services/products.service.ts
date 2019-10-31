import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  products: ProductInterface[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    this.http.get('https://angular-html-e80a0.firebaseio.com/products_idx.json')
      .subscribe((resp: ProductInterface[]) => {
        console.log("GETTING PRODUCTS IDX", resp);
        this.loading = false;
        this.products = resp;
      });
  }
}
