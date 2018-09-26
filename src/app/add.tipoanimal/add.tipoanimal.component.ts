import { TipoAnimal } from './../models/TipoAnimal';
import { TanimalesService } from './../services/tanimales.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { identity } from 'rxjs';


@Component({
  selector: 'app-add.tipoanimal',
  templateUrl: './add.tipoanimal.component.html',
  styleUrls: ['./add.tipoanimal.component.css'],
  providers: [TanimalesService]
})
export class AddTipoanimalComponent implements OnInit {
  public tipoAnimal; TipoAnimal;

  constructor(private _tanimal: TanimalesService, private _router: Router) {
    this.tipoAnimal = new TipoAnimal();
   }

  ngOnInit() {
  }

}
