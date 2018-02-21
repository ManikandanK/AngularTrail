import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';

import { AppRoutingModule }     from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  providers: [ HeroService, MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }