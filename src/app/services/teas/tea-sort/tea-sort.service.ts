import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaSort} from '../../../models/Tea/TeaSort';

@Injectable()
export class TeaSortService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getAllTeaSorts(): Observable<TeaSort[]> {
        const url = this.globals.apiUrl + '/teas/sorts/allSorts';
        return this.http.get<TeaSort[]>(url);
        // todo: error handling
    }

    getTeaSortById(id: number): Observable<TeaSort> {
        const url = this.globals.apiUrl + '/teas/sorts/sort/' + id;
        return this.http.get<TeaSort[]>(url)[0];
        // todo: error handling
    }

    createTeaSort(image: File, teaSortObj: TeaSort) { // todo: check if type File is correct + if Partials of TeaSort is necassery because of no given image url
        const urlImageFile = this.globals.apiUrl + '/teas/sorts/image/create';
        const formData = new FormData().append('image', image);
        this.http.post(urlImageFile, formData, this.globals.httpFileOptions);
        // todo: after file success make sort db entry
        const urlSortObj = this.globals.apiUrl + '/teas/sorts/create';
        this.http.post(urlSortObj, teaSortObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTeaSort(teaSortObj: TeaSort, image?: File) { // todo: check if type File is correct + if Partials of TeaSort is necassery because of no given image url
        if(image) {
            const urlImageFile = this.globals.apiUrl + '/teas/sorts/image/create';
            const formData = new FormData().append('image', image);
            this.http.post(urlImageFile, formData, this.globals.httpFileOptions);
            // todo: after file success make sort db entry
            const urlSortObj = this.globals.apiUrl + '/teas/sorts/update';
            this.http.post(urlSortObj, teaSortObj, this.globals.httpJsonOptions);
        } else {
            const url = this.globals.apiUrl + '/teas/sorts/update';
            this.http.post(url, teaSortObj, this.globals.httpJsonOptions);
        }
        // todo: error handling
    }

    deleteTeaSort(id: number) {
        const url = this.globals.apiUrl + '/teas/sorts/delete/' + id;
        return this.http.get(url);
        // todo: error handling
    }
}
