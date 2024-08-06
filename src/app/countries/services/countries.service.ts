import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Country } from "../interfaces/country";
import { catchError,  map,  Observable, of, tap } from "rxjs";
import { CacheStore } from "../interfaces/cache-store-interface";
import { Region } from "../interfaces/region.type";

@Injectable({providedIn: 'root'})

export class CountriesService {
    constructor(private httpClient : HttpClient) {
        this.loadFromLocalStorage()
     }

    private apiUrl = "https://restcountries.com/v3.1"
    cacheStore:CacheStore = {
        byCapital:{term:'', countries:[]},
        byCountry:{term:'', countries:[]},
        byRegion:{region:'', countries:[]}
    }

    private saveToLocalStorage():void{
        localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore))
    }
    private loadFromLocalStorage():void{
        if(!localStorage.getItem('cacheStore')) return
        this.cacheStore  = JSON.parse(localStorage.getItem('cacheStore')!)
        
    }


    private getCountriesRequest(url:string):Observable<Country[]> {
        return  this.httpClient.get<Country[]>(url)
        .pipe(
            catchError( () => of([])) //si hay error regresamos un observable vacío
        )
    }

    searchCapital(term:string):Observable<Country[]>{
        return this.getCountriesRequest(`${this.apiUrl}/capital/${term}`)
        .pipe(
            tap( countries => this.cacheStore.byCapital = {term, countries}),
            tap( () => this.saveToLocalStorage())
            
        )
    }
    searchCountry(term:string):Observable<Country[]>{
        return this.getCountriesRequest(`${this.apiUrl}/name/${term}`)
        .pipe(
            tap( countries => this.cacheStore.byCountry = {term, countries}),
            tap( () => this.saveToLocalStorage())
        )
    }
    searchRegion(region:Region):Observable<Country[]>{
        return this.getCountriesRequest(`${this.apiUrl}/region/${region}`)
        .pipe(
           tap( countries => this.cacheStore.byRegion = {region, countries}),
           tap( () => this.saveToLocalStorage())
        )
    }
    searchCountryByAlphaCode(term:string):Observable<Country | null>{              
        return  this.httpClient.get <Country[]>(`${this.apiUrl}/alpha/${term}`)
        .pipe(            
            map( countries => countries.length > 0 ? countries[0] : null),
            catchError( () => of(null)) //si hay error regresamos un observable vacío
        )
    }
    
}