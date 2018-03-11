import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ComponentsModule} from '../components/components.module';
import {AngularDraggableModule} from "angular2-draggable";
import {FigureProvider} from '../providers/figure/figure';
import {EnvironmentProvider} from '../providers/environment/environment';
import {CommonModule} from "@angular/common";
import {CookieModule} from "ngx-cookie";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [BrowserModule, HttpClientModule, CommonModule, CookieModule.forRoot(),
    IonicModule.forRoot(MyApp), ComponentsModule, AngularDraggableModule],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FigureProvider,
    EnvironmentProvider
  ]
})
export class AppModule {}
