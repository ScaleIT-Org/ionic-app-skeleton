import { IonicPage        } from "ionic-angular"      ;
import { Component        } from "@angular/core"      ;
import { NavController    } from "ionic-angular"      ;
import { TranslateService } from "@ngx-translate/core";
import {LocalStorage} from "ngx-store";

@IonicPage({
  name    : "user",
  segment : "user"
})
@Component({
  selector    : "page-home",
  templateUrl : "home.html"
})
export class HomePage {

  @LocalStorage()
  storedInput: string;
  today: number;

  constructor(
    public  navCtrl   : NavController    ,
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
