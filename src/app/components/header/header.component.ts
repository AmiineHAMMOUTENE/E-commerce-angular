import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `<div class="header">{{title ()}} </div> `,
  styles: `
  

  
  `,
})
export class HeaderComponent {

  title = signal('This is my app')

}
