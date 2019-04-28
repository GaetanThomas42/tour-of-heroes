import { Component, OnInit } from '@angular/core';
import {Hero} from '../class/hero';
import {HeroesService} from '../heroes.service';


@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.css']
})
export class TopHeroesComponent implements OnInit {

  topHeroes: Hero[] = [];
  heroes: Hero[] ;

  constructor(public hs: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this.hs.getAll();

    for (let i = 0; i < 3; i++) {
      this.topHeroes.push(this.heroes[i]);
    }
  }

}
