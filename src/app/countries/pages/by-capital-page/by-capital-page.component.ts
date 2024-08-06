import { Component, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Pokemon, Result } from '../../interfaces/pokemons';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  constructor(private countriesService:CountriesService){}
 
  public countries:Country[] =[]

  searchByCapital(term:string):void{
      this.countriesService.searchCapital(term).subscribe(
        (data) => {
            this.countries = data                   
        }
      )
  }
}
