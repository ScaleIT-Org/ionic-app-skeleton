import { Component } from '@angular/core';
import { NavController } from "ionic-angular";
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "footer",
  templateUrl: "footer.html"
})
export class FooterComponent {
  text: string;

  constructor(public navCtrl: NavController) {
    console.log("Hello FooterComponent Component");
    this.text = "Hello World";
  }
}
