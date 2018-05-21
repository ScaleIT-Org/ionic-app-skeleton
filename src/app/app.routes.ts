import {HomePage} from "../pages/home/home";
import {Routes} from "@angular/router";
import {OtherPage} from "../pages/other/other";

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'other', component: OtherPage }
];
