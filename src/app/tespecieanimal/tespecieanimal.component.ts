import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-tespecieanimal',
  templateUrl: './tespecieanimal.component.html',
  styleUrls: ['./tespecieanimal.component.css']
})
export class TespecieanimalComponent implements OnInit {
  cabecerasColumnas: string[] = ['codigoplaza', 'nombreplaza', 'plazaactivo', 'actions'];
  msg = '';
  // clase dinamica pra carga de mensajes
  claseDinamic = 'alert alert-success alert-with-icon';
  iconAlert = 'done';
  constructor() {

  }

  ngOnInit() {
  }

}
