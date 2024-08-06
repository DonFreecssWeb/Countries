import { Component, EventEmitter, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, Result } from '../../interfaces/pokemons';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public countries:Country[] =[]
  isLoading = false
  initialValue:string = ''

  constructor(private countriesService:CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }
 

  searchByCapital(term:string):void{
    this.isLoading = true
      this.countriesService.searchCapital(term).subscribe(
        (data) => {
            this.countries = data           
            this.isLoading = false        
        }
      )
  }
}
