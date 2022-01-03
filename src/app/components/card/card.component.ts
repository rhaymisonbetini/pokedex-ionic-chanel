import { Component, OnInit, Input } from '@angular/core';
import { PokemoInterface } from 'src/app/interfaces/pokemons.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input('pokemons') pokemons: Array<PokemoInterface>

  constructor() { }

  ngOnInit() {
    console.log(this.pokemons)
  }

}
