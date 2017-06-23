import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {MainContentComponent} from "./main-content/main-content.component";
import {ArticleSectionComponent} from "./article-section/article-section.component";
import {FootSectionComponent} from "./foot-section/foot-section.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    ArticleSectionComponent,
    FootSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
