import { Injectable } from '@angular/core';
import {Hero} from './class/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

   heroes: Hero[] = [
    { id: 1, name: 'Mr. Nice' },
    { id: 2, name: 'Narco' },
    { id: 3, name: 'Bombasto' },
    { id: 4, name: 'Celeritas' },
    { id: 5, name: 'Magneta' },
    { id: 6, name: 'RubberMan' },
    { id: 7, name: 'Dynama' },
    { id: 8, name: 'Dr IQ' },
    { id: 9, name: 'Magma' },
    { id: 10, name: 'Tornado' }
  ];

  constructor() { }

  getAll(): Hero[] {
    return this.heroes;
  }

  addHero(hero): void {
    this.heroes.push(hero);
  }

  deleteHero(id): void {
      this.heroes.splice( id - 1, 1);
  }

  getLastId(): number {
    return  this.heroes[this.heroes.length - 1 ].id;
  }
}
