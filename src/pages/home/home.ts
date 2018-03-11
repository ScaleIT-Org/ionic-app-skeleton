import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Figure, FigureProvider} from "../../providers/figure/figure";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hoomans: string[];
  ais: string[];

  constructor(public navCtrl: NavController, private figureProvider: FigureProvider) {
    // use an observer so attributes get updated when data is available,
    // otherwise the attributes would be undefined on start
    let figureObserver = this.figureProvider.getFigures();

    figureObserver
      .subscribe(data => {
        this.hoomans = data
          .filter(x => x.type === 'Human') // get all humans
          .map(x => x.name); // get only the name string;
      });
    figureObserver
      .subscribe(data => {
        this.ais = data
          .filter(x => x.type === 'AI') // get all AIs
          .map(x => x.name);
      });
  }
}
