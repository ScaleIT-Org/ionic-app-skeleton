import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {ComponentsModule} from "../../components/components.module";
import {PipesModule} from "../../pipes/pipes.module";
import {OtherPage} from "./other";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [OtherPage],
  imports: [
    IonicPageModule.forChild(OtherPage),
    ComponentsModule,
    PipesModule,
    TranslateModule
  ],
  bootstrap: [OtherPage],
  exports: [OtherPage]
})
export class OtherPageModule {}
