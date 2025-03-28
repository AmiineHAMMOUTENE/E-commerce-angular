import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
    <span class="text-xl">My store</span>
    <app-primary-button  label="cart" />
  </div> 
  `,
  styles: `
  
  `,
})
export class HeaderComponent {


}
