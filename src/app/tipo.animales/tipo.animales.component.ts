import { TipoAnimal } from './../models/TipoAnimal';
import { TanimalesService } from './../services/tanimales.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { identity } from 'rxjs';

@Component({
  selector: 'app-tipo.animales',
  templateUrl: './tipo.animales.component.html',
  styleUrls: ['./tipo.animales.component.css'],
  providers: [ TanimalesService ]
})
export class TipoAnimalesComponent implements OnInit {
  public tipoAnimales: any[] = [];
  public tanimal: TipoAnimal;

  constructor(private _tanimal: TanimalesService, private _router: Router) {
    this.tanimal = new TipoAnimal();
  }

  ngOnInit() {
  this._tanimal.getTanimales().subscribe(
    response => {
      if ( response.status === 'Success') {
         this.tipoAnimales = response.tipoanimal;
         console.log(this.tipoAnimales);
      }
    }, error => {
      console.log(error);
    }
  );
  }

}
