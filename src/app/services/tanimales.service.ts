import { Params } from '@angular/router';
import { GLOBAL } from './global';
import {Injectable} from '@angular/core' ;
import {Http, Response, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TanimalesService {
    public token: string;
    public url: string;
    constructor ( private _http: Http) {
        this.token = GLOBAL.token;
        this.url   = GLOBAL.url;
    }
    getTanimales() {

        const params = 'authorization=' + this.token;
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
        return this._http.post(this.url + 'tipoanimal/query', params, {headers: headers}).pipe(map(res => res.json()));
    }

}
