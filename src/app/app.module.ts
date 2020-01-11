import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MiniMenuComponent } from './mini-menu/mini-menu.component';
import { SloganComponent } from './slogan/slogan.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SoftComponent } from './soft/soft.component';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MiniMenuComponent,
    SloganComponent,
    SideBarComponent,
    MainContentComponent,
    FooterComponent,
    ServiceComponent,
    AboutComponent,
    ContactComponent,
    SoftComponent,
    PartnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
