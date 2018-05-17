import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {TeaAroma} from '../../../models/Tea/TeaAroma';

@Injectable()
export class TeaAromaService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getTeaAromas(): Observable<TeaAroma[]> {
        const url = this.globals.apiUrl + '/teas/aromas/allAromas';
        return this.http.get<TeaAroma[]>(url);
        // todo: error handling
    }

    getTeaAromaById(id: number): Observable<TeaAroma> {
        const url = this.globals.apiUrl + '/teas/aromas/aroma/' + id;
        return this.http.get<TeaAroma[]>(url)[0];
        // todo: error handling
    }

    getTeaAromasByTeaId(teaId: number): Observable<TeaAroma[]> {
        const url = this.globals.apiUrl + '/teas/aromas/tea/' + teaId;
        return this.http.get<TeaAroma[]>(url);
        // todo: error handling
    }

    createTeaAroma(teaAromaObj: TeaAroma) {
        const url = this.globals.apiUrl + '/teas/aromas/create';
        this.http.post(url, teaAromaObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTeaAroma(teaAromaObj: TeaAroma) {
        const url = this.globals.apiUrl + '/teas/aromas/update';
        this.http.post(url, teaAromaObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    deleteTeaAroma(id: number) {
        const url = this.globals.apiUrl + '/teas/aromas/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }

}
