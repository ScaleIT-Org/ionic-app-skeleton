import { NgModule } from "@angular/core";
import { IonicModule } from "ionic-angular";
import { AppFooterComponent } from './app-footer/app-footer';
import { AppHeaderComponent } from './app-header/app-header';
@NgModule({
  declarations: [
    AppFooterComponent,
    AppHeaderComponent
  ],
  imports: [
    // you need to use IonicModule.forRoot() method to 'provide' ionic directives to your components
    IonicModule.forRoot(AppHeaderComponent),
    IonicModule.forRoot(AppFooterComponent),
  ],
  exports: [
    AppFooterComponent,
    AppHeaderComponent
  ]
})
export class ComponentsModule {}
