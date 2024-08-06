import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';


@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent  implements OnInit {
  countries: Country[] = []
  initialValue:string = ''

  
  constructor(private countriesService:CountriesService) { }

  ngOnInit(): void {
    this.initialValue = this.countriesService.cacheStore.byCountry.term
    this.countries = this.countriesService.cacheStore.byCountry.countries
  }

  searchByCountry(term:string):void{
    
    this.countriesService.searchCountry(term).subscribe(
      (data) => {
          this.countries = data                   
      }
    )
}
}
