import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

import {ScaleITDomainApp} from "./app.component";
import {HttpDataProvider} from "../providers/http-data/http-data";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {ComponentsModule} from "../components/components.module";
import {HomePageModule} from "../pages/home/home.module";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {OtherPageModule} from "../pages/other/other.module";
import {AdministrationPageModule} from "../pages/administration/administration.module";

@NgModule({
  declarations: [ScaleITDomainApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ScaleITDomainApp),
    RouterModule.forRoot(routes),
    ComponentsModule,
    HomePageModule,
    OtherPageModule,
    AdministrationPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp, ScaleITDomainApp],
  entryComponents: [ScaleITDomainApp],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    HttpDataProvider
  ]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
