import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { PokemoInterface } from '../interfaces/pokemons.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private _BASE_URL: string = environment.URL_BASE

  constructor(
    private _httpClient: HttpClient,
  ) { }


  getPokemons(): Observable<Array<PokemoInterface>> {

    return this._httpClient.get<Array<any>>(this._BASE_URL).pipe(map((response: any) => {

      let pokemons: Array<PokemoInterface> = []

      for (let pokemon of response.pokemon) {

        let poke: PokemoInterface = {
          id: pokemon.id,
          name: pokemon.name,
          img: pokemon.img,
          type: pokemon.type,
          weight: pokemon.weight,
          candy: pokemon.candy,
          weaknesses: pokemon.weaknesses,
        }
        pokemons.push(poke)
      }
      return pokemons
    }))
  }
}
