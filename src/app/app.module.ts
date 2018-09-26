import { TipoAnimalesComponent } from './tipo.animales/tipo.animales.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TespecieanimalComponent } from './tespecieanimal/tespecieanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoAnimalesComponent,
    TespecieanimalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
