import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LandingPageComponent } from './landing-page/index';
import { ServicesComponent } from './services/index';
import { NavbarComponent } from './navbar/index';
import { ContactPageComponent } from './contact/index';
import { AboutPageComponent } from './about/index';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        ServicesComponent,
        NavbarComponent,
        ContactPageComponent,
        AboutPageComponent,
    ],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}