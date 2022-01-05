import { Component, OnInit } from '@angular/core';
import { PokemoInterface } from 'src/app/interfaces/pokemons.interface';
import { LoadingProvider } from 'src/app/providers/loading-provider';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public pokemons: Array<PokemoInterface> = []
  public message: string = 'Carregando Pokedex'

  constructor(
    private _apiService: ApiService,
    private _loadingProvider: LoadingProvider
  ) { }

  ngOnInit() {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this._loadingProvider.loadingPresent(this.message);
    setTimeout(() => {
      this._apiService.getPokemons().subscribe((res: Array<PokemoInterface>) => {
        this.pokemons = res;
        this._loadingProvider.loadingDismiss();
      }, err => {
        console.log(err);
        this._loadingProvider.loadingDismiss();
      })
    }, 2500)
  }
}
