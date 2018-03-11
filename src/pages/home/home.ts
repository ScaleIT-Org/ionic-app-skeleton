import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {FigureProvider} from "../../providers/figure/figure";
import {CookieService} from "ngx-cookie";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  hoomans: string[];
  ais: string[];
  private itemStyles: object;

  constructor(public navCtrl: NavController,
              private figureProvider: FigureProvider,
              private cookieService: CookieService) {
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

    let cookieItemStyles = this.cookieService.getObject('homeItemStyles');
    if (cookieItemStyles) {
      console.log(cookieItemStyles);
      this.itemStyles = cookieItemStyles;
    } else {
      this.itemStyles = {};
    }
  }

  saveStyle($event, item) {
    this.itemStyles[item] = {transform: $event.style.transform, transition: $event.style.transition};
    this.cookieService.putObject('homeItemStyles', this.itemStyles);
  }

  getStyle(item) {
    return this.itemStyles[item];
  }

  reset() {
    this.itemStyles = {};
    this.cookieService.remove('homeItemStyles');
  }
}
