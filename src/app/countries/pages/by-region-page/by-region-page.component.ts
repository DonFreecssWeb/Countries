import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {
countries: Country[] = []
  constructor(private countriesService:CountriesService) { }

  searchByRegion(term:string):void{
    this.countriesService.searchRegion(term).subscribe(
      (data) => {
          this.countries = data                   
      }
    )
  }
}