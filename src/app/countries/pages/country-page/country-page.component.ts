import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  country?: Country | null
//leer parametros url
  constructor(private activateRoute:ActivatedRoute,
    private countryService:CountriesService,
    private router:Router
  ){}


  ngOnInit(): void {
    //como params devuelve un observable tengo acceso a los pipes
    //switchMap su objetivo es devolver un nuevo observable
      this.activateRoute.params
      .pipe(
        switchMap( ({id}) => this.countryService.searchCountryByAlphaCode(id) )
      ).subscribe( country => {
        if(!country) return this.router.navigateByUrl('/countries')
        this.country = country   
        return
      })
  }

}
