import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {TopHeroesComponent} from './top-heroes/top-heroes.component';

const routes: Routes = [
        {path: '', pathMatch: 'full', redirectTo: 'heroes'},
        {path: 'heroes', component: HeroesComponent},
        {path: 'top-heroes', component: TopHeroesComponent}
      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
