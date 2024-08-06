import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule //para que funcione el routeLink
  ],
  exports: [
    HomePagesComponent,
    AboutPagesComponent,
    SidebarComponent,
    ContactPageComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
