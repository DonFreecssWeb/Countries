import { Component, Input } from '@angular/core';
import {  Result } from '../../interfaces/pokemons';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styles: []
})
export class CountryTableComponent {
  @Input()
  countries!:Country[]


  
}
