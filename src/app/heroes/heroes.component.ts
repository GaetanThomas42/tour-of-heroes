import { Component, OnInit } from '@angular/core';
import {Hero} from '../class/hero';
import {HeroesService} from '../heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  heroName: string;

  constructor(public hs: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this.hs.getAll();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  insertHero(): void {
    let hero = new Hero(this.heroName,this.hs.getLastId());
    this.hs.addHero(hero);
  }
}
