import { Component } from "@angular/core";

import { products, product } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share(product: product) {
    window.alert("The product " + product.name + " has been shared!");
  }

  onNotify(price: number) {
    alert("Notificando: $" + price + " Ta caro");
  }

  onNotify2() {
    alert("Notificando: precio chido");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
