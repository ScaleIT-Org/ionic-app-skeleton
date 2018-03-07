import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ScaleITDomainApp } from './app.component';

@NgModule({
  // somehow ionicons get busted when doing lazy loaded pages (declare HomePage here and they work)
  declarations: [ScaleITDomainApp, HomePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ScaleITDomainApp, {
      //not working
      backButtonText: "a"
    }),
    // because the root page component is lazy loaded, it must be imported in the root module
  ],
  bootstrap: [IonicApp],
  entryComponents: [ScaleITDomainApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
