import { AddTipoanimalComponent } from './add.tipoanimal/add.tipoanimal.component';
import { Routes,  RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { TipoAnimalesComponent } from './tipo.animales/tipo.animales.component';
const appRoutes: Routes = [{path : '', component : TipoAnimalesComponent} ,
                           {path : 'index' , component : TipoAnimalesComponent},
                           {path : 'edittipoanimal' , component: AddTipoanimalComponent },
                           {path : '**' , component : TipoAnimalesComponent}
                        ];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
