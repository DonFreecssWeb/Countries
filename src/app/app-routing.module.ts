import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  {path: "home" ,component : HomePagesComponent},
  {path: "about" , component : AboutPagesComponent},
  {path: "contact" , component : ContactPageComponent},
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(mod => mod.CountriesModule)},//lazyload
  {path: "**" , redirectTo: "countries"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
