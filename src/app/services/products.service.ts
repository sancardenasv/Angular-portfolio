import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from "../interfaces/product.interface";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  loading = true;
  products: ProductInterface[] = [];
  filteredProducts: ProductInterface[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  private getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-e80a0.firebaseio.com/products_idx.json')
        .subscribe((resp: ProductInterface[]) => {
          // console.log("GETTING PRODUCTS IDX", resp);
          this.loading = false;
          this.products = resp;
          resolve();
        });
    });
  }

  getProduct(id: string) {
    return this.http.get(`https://angular-html-e80a0.firebaseio.com/products/${id}.json`);
  }

  filterProducts(term: string) {
    if (this.products.length === 0) {
      // Load products
      this.getProducts().then(() => {
        this.applyFilter(term);
      })
    } else {
      this.applyFilter(term);
    }
    
  }

  private applyFilter(term: string) {
    this.filteredProducts = this.products.filter(product => {
      return product.categoria.toLowerCase().indexOf(term.toLowerCase()) >= 0 || product.titulo.toLowerCase().indexOf(term.toLowerCase()) >= 0;
    });

    // console.log("FILTERED PRODUCTS", this.filteredProducts)
  }
}
