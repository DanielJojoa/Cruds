import { TipoAnimal } from './../models/TipoAnimal';
import { TanimalesService } from './../services/tanimales.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { identity } from 'rxjs';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-tipo.animales',
  templateUrl: './tipo.animales.component.html',
  styleUrls: ['./tipo.animales.component.css'],
  providers: [ TanimalesService ]
})
export class TipoAnimalesComponent implements OnInit {
  public tipoAnimales: any[] = [];
  public tanimal: TipoAnimal;
  public agregarTA;
  public editarTA;
  public tituloPrincipal;
  public tituloBotonSubmit;


  constructor(private _tanimal: TanimalesService, private _router: Router) {
    this.tanimal = new TipoAnimal();
    this.agregarTA = false;
    this.editarTA = false;
  }

  ngOnInit() {
  this.agregarTA = false;
  this.tituloPrincipal = 'Agregar nuevo tipo de animal';
  this.tituloBotonSubmit = 'Agregar';
  this._tanimal.getTanimales().subscribe(
    response => {
      if ( response.status === 'Success') {
         this.tipoAnimales = response.tipoanimal;
      }
    }, error => {
      console.log(error);
    }
  );
  }

  addNewTA () {
    this.tanimal = new TipoAnimal();
    this.agregarTA = true;
    this.editarTA = false;
    this.tituloPrincipal = 'Agregar nuevo tipo de animal';
    this.tituloBotonSubmit =  'Agregar';
  }
  editTA(tipo) {
    console.log(tipo);
    this.agregarTA = (this.agregarTA === false) ? true : false;
    this.editarTA = true;
    this.agregarTA = true;
    this.tanimal = tipo;
    this.tituloBotonSubmit = 'Editar';
    this.tituloPrincipal = 'Editar tipo de animal';


  }
  restartValues() {
    this.editarTA = false;
    this.agregarTA = false;
    this.tanimal = new TipoAnimal();
  }

  onSubmit() {
    if (this.editarTA === false ) {
      this._tanimal.addNewTipoAnimal(this.tanimal).subscribe(
        response => {
          console.log(response);
        }, error => {
          console.log(error);
        }
      );
    } else {
      this._tanimal.editTipoAnimal(this.tanimal).subscribe(
        response => {
          console.log(response);
        }, error => {
          console.log(error);
        }
      );
    }

  }
  borrarTipoAnimal(tipo) {
    this.tanimal = tipo ;
    this._tanimal.removeTipoAnimal(this.tanimal).subscribe(
      response => {
        console.log(response);
        this._router.navigate(['/index']);
      }, error => {
        console.log(error);
      }
    );
  }

}
