import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {HomePage} from "./home";
import {ComponentsModule} from "../../components/components.module";
import {PipesModule} from "../../pipes/pipes.module";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [HomePage],
  imports: [
    IonicPageModule.forChild(HomePage),
    ComponentsModule,
    PipesModule,
    TranslateModule,
    RouterModule
  ],
  bootstrap: [HomePage],
  exports: [HomePage]
})
export class HomePageModule {}
