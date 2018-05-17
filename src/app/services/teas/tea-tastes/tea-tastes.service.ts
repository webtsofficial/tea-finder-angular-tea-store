import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaTaste} from '../../../models/Tea/TeaTaste';

@Injectable()
export class TeaTastesService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getAllTeaTastes(): Observable<TeaTaste[]> {
        const url = this.globals.apiUrl + '/teas/tastes/allTastes';
        return this.http.get<TeaTaste[]>(url);
        // todo: error handling
    }

    getTeaTasteById(id: number): Observable<TeaTaste> {
        const url = this.globals.apiUrl + '/teas/tastes/taste/' + id;
        return this.http.get<TeaTaste[]>(url)[0];
        // todo: error handling
    }

    getTeaTastesByTeaId(teaId: number): Observable<TeaTaste[]> {
        const url = this.globals.apiUrl + '/teas/tastes/tea/' + teaId;
        return this.http.get<TeaTaste[]>(url);
        // todo: error handling
    }

    createTeaTaste(teaTasteObj: TeaTaste) {
        const url = this.globals.apiUrl + '/teas/tastes/create';
        this.http.post(url, teaTasteObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTeaTaste(teaTasteObj: TeaTaste) {
        const url = this.globals.apiUrl + '/teas/tastes/update';
        this.http.post(url, teaTasteObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    deleteTeaTaste(id: number) {
        const url = this.globals.apiUrl + '/teas/tastes/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }

}
