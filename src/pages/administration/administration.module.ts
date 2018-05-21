import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdministrationPage } from './administration';
import { ComponentsModule } from '../../components/components.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdministrationPage,
  ],
  imports: [
    IonicPageModule.forChild(AdministrationPage),
    ComponentsModule,
    TranslateModule
  ],
})
export class AdministrationPageModule {}
