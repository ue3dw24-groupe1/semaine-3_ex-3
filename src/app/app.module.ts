import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService }         from './hero-detail/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSearchService } from './hero-search/hero-search.service';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent, 
    HeroDetailComponent, 
    HeroesComponent, 
    DashboardComponent, 
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    HeroService,
    HeroSearchService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
