import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  imports: [],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
        {{ product.title }}

      }

    </div>
  `,
  styles: ``
})
export class ProductsListComponent {

  products = signal<Product[]>([


  ]);
}
