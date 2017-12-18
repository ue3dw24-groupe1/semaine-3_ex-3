import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PopularComponent } from './popular/popular.component';
import { NewComponent } from './new/new.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/movies.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CarouselComponent,
    MainContentComponent,
    PopularComponent,
    NewComponent,
    FooterComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
   MoviesService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
