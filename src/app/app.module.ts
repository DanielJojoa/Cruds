import { TipoAnimalesComponent } from './tipo.animales/tipo.animales.component';
import { routing, appRoutingProviders } from './app.routing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TespecieanimalComponent } from './tespecieanimal/tespecieanimal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:import-spacing
import { MaterialModule } from './material';

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
    routing,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
