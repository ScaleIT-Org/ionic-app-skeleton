import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { FooterComponent } from './footer/footer';
@NgModule({
	declarations: [HeaderComponent,
    FooterComponent],
	imports: [],
	exports: [HeaderComponent,
    FooterComponent]
})
export class ComponentsModule {}
