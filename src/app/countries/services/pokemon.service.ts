import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Pokemon } from '../interfaces/pokemons';
import { Observable, catchError, of } from 'rxjs';
import { PokemonUnit } from '../interfaces/pokemon';

@Injectable({providedIn: 'root'})

export class PokemonService {

    
    //private url = "https://countryapi.io/api/all?apikey=YOUR-APIKEY"
    private url = "https://pokeapi.co/api/v2/pokemon"

    constructor(private httpClient: HttpClient) { }

    public searchPokemonById(term:string):Observable<PokemonUnit>{  
      console.log(`${this.url}/${term}`)    
        return  this.httpClient.get <PokemonUnit>(`${this.url}/${term}`)        
        .pipe( 
            catchError( () => of() )
        )      
    }

     public searchPokemon(term:string):Observable<Pokemon>{
       //return  this.httpClient.get <Pokemon>(`${this.url}/pokemon/${term}`) 
       return  this.httpClient.get <Pokemon>(`${this.url}`) 
       .pipe( 
           catchError( () => of() )
       )            
     } 
    
}