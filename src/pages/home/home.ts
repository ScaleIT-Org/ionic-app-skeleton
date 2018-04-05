import { IonicPage } from "ionic-angular";
import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@IonicPage({
  name: "user",
  segment: "user"
})
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  today: number;

  constructor(public navCtrl: NavController) {
    this.today = Date.now();
  }
}
