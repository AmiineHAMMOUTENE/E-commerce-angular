import { Component, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";

@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent],
  template: `<div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between">
    <span>My store</span>
    <app-primary-button  label="Cart" (btnClicked)="showButtonclicked()" />
  </div> `,
  styles: `
  
  `,
})
export class HeaderComponent {

  showButtonclicked(){
    console.log("clicked")
  }
  title = signal('This is my app')

}
