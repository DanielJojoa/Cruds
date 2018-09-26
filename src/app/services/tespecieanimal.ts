import { Params } from '@angular/router';
import { GLOBAL } from './global';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { TipoAnimal } from '../models/TipoAnimal';

@Injectable()
export class EspecieAnimalService {
    public token: string;
    public url: string;
    public prueba;
    constructor(private _http: Http) {
        this.token = GLOBAL.token;
        this.url = GLOBAL.url;
    }
    public selectedTipoAnimal: TipoAnimal;
    getTanimales() {

        const params = 'authorization=' + this.token;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this._http.post(this.url + 'tipoanimal/query', params, { headers: headers }).pipe(map(res => res.json()));
    }
    addNewTipoAnimal(newTipoAnimal) {

        const json = JSON.stringify(newTipoAnimal);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.url + 'tipoanimal/new', params, { headers: headers }).pipe(map(res => res.json()));

    }
    editTipoAnimal(newTipoAnimal) {

        const json = JSON.stringify(newTipoAnimal);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.url + 'tipoanimal/edit', params, { headers: headers }).pipe(map(res => res.json()));

    }
    removeTipoAnimal(newTipoAnimal) {

        const json = JSON.stringify(newTipoAnimal);
        console.log(json);
        const params = 'json=' + json + '&authorization=' + this.token;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.url + 'tipoanimal/remove', params, { headers: headers }).pipe(map(res => res.json()));

    }


}
