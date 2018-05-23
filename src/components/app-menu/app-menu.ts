import { Component } from '@angular/core';

/**
 * Generated class for the AppMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-menu',
  templateUrl: 'app-menu.html'
})
export class AppMenuComponent {

  text: string;

  constructor() {
    console.log('Hello AppMenuComponent Component');
    this.text = 'Hello World';
  }

}
