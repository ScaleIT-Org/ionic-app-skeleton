import {IonicPage} from "ionic-angular";
import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";

@IonicPage({
  name    : "user",
  segment : "user"
})
@Component({
  selector    : "page-home",
  templateUrl : "home.html"
})
export class HomePage {
  today: number;

  constructor(
    private translate : TranslateService
  ) {
    this.today = Date.now();
    this.changeLanguage('de');
  }

  // translation usage example from https://github.com/ngx-translate/ionic-example
  public changeLanguage(language) {
    this.translate.use(language);
  }
}
