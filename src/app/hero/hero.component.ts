import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../class/hero';
import {HeroesService} from "../heroes.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() hero: Hero;

  constructor(public hs: HeroesService) { }

  ngOnInit() {
  }

  removeHero(id): void {
    this.hs.deleteHero(id);
  }
}
