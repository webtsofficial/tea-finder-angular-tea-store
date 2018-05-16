import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaImage} from '../../../models/Tea/TeaImage';

@Injectable()
export class TeaImageService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getAllTeaImages(): Observable<TeaImage[]> {
        const url = this.globals.apiUrl + '/teas/images/allImages';
        return this.http.get<TeaImage[]>(url);
    }

    getTeaImageById(id: number): Observable<TeaImage> {
        const url = this.globals.apiUrl + '/teas/images/image/' + id;
        return this.http.get<TeaImage[]>(url)[0];
    }

    getTeaImagesByTeaid(teaId: number): Observable<TeaImage[]> {
        const url = this.globals.apiUrl + '/teas/images/tea/' + teaId;
        return this.http.get<TeaImage[]>(url);
    }

}
