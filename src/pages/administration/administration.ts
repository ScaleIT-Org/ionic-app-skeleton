import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HttpDataProvider } from '../../providers/http-data/http-data';

/**
 * Generated class for the AdministrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: "admin",
  segment: "admin"
})
@Component({
  selector: "page-administration",
  templateUrl: "administration.html"
})
export class AdministrationPage {
  data: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public dataProvider: HttpDataProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdministrationPage");

console.log("Fetching data...");
    let dataObserver = this.dataProvider.getData();

    dataObserver
      .subscribe(dataFromProvider => {
        console.log("Data received:" + dataFromProvider);
        this.data = dataFromProvider
          .filter(x => x["type"] === 'someData') // get only certain data points;
          .map(x => x["name"]); // get only the name string;
        console.log("Data filtered:" + this.data);
      });
  }
}
