import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainContentComponent} from './main-content/main-content.component';
import {ServiceComponent} from "./service/service.component";
import {AboutComponent} from "./about/about.component";
import {PartnerComponent} from "./partner/partner.component";
import {SoftComponent} from "./soft/soft.component";
import {ContactComponent} from "./contact/contact.component";
import {PriceComponent} from "./price/price.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainContentComponent
  },
  {
    path: 'service',
    component: ServiceComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'partner',
    component: PartnerComponent
  },
  {
    path: 'soft',
    component: SoftComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'price',
    component: PriceComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
