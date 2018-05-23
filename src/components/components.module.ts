import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { AppFooterComponent } from './app-footer/app-footer';
import { AppHeaderComponent } from './app-header/app-header';
import { AppMenuComponent } from './app-menu/app-menu';
@NgModule({
  declarations: [
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent
  ],
  imports: [
    IonicModule
  ],
  exports: [
    AppFooterComponent,
    AppHeaderComponent,
    AppMenuComponent
  ]
})
export class ComponentsModule {}
