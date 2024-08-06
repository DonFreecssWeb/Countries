import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../interfaces/country";
import { catchError,  map,  Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})

export class CountriesService {
    constructor(private httpClient : HttpClient) { }

    private url = "https://restcountries.com/v3.1"

    searchCapital(term:string):Observable<Country[]>{
        return  this.httpClient.get <Country[]>(`${this.url}/capital/${term}`)
        .pipe(
            catchError( () => of([])) //si hay error regresamos un observable arreglo vacío
        )
    }
    searchCountry(term:string):Observable<Country[]>{
        return  this.httpClient.get <Country[]>(`${this.url}/name/${term}`)
        .pipe(
            catchError( () => of([])) //si hay error regresamos un observable arreglo vacío
        )
    }
    searchRegion(term:string):Observable<Country[]>{
        return  this.httpClient.get <Country[]>(`${this.url}/region/${term}`)
        .pipe(
            catchError( () => of([])) //si hay error regresamos un observable arreglo vacío
        )
    }
    searchCountryByAlphaCode(term:string):Observable<Country | null>{
        return  this.httpClient.get <Country[]>(`${this.url}/alpha/${term}`)
        .pipe(
            map( countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null)) //si hay error regresamos un observable vacío
        )
    }
    
}