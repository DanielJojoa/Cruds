import { Routes,  RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {  TespecieanimalComponent } from './tespecieanimal/tespecieanimal.component';
import { TipoAnimalesComponent } from './tipo.animales/tipo.animales.component';
const appRoutes: Routes = [{path : '', component : TipoAnimalesComponent} ,
                           {path : 'index' , component : TipoAnimalesComponent},
                           {path : 'especieanimal' , component : TespecieanimalComponent},
                           {path : '**' , component : TipoAnimalesComponent}
                        ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
