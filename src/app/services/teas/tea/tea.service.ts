import {Injectable} from '@angular/core';
import {
    HttpClient,
    HttpHeaders
} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Tea} from '../../../models/Tea/Tea';
import {Globals} from '../../../globals/Globals';

@Injectable()
export class TeaService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getTeas(): Observable<Tea[]> {
        const url = this.globals.apiUrl + '/teas/allTeas';
        return this.http.get<Tea[]>(url);
        // todo: error handling
    }

    getTeaById(id: number): Observable<Tea> {
        const url = this.globals.apiUrl + '/teas/tea/' + id;
        return this.http.get<Tea[]>(url)[0];
        // todo: error handling
    }

    createTea(teaObj: Tea) {
        const url = this.globals.apiUrl + '/teas/create';
        this.http.post(url, teaObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTea(teaObj: Tea) {
        const url = this.globals.apiUrl + '/teas/update';
        this.http.post(url, teaObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    deleteTea(id: number) {
        const url = this.globals.apiUrl + '/teas/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }

}
