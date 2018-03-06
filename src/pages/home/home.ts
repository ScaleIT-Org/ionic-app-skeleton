import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bag1: string[];
  bag2: string[];

  constructor(public navCtrl: NavController) {
    this.bag1 = ['PotatOS', 'GLaDOS', 'Chell'];
    this.bag2 = ['Atlas']
  }

}
