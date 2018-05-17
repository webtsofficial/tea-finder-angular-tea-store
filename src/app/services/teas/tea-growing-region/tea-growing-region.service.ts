import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaGrowingRegion} from '../../../models/Tea/TeaGrowingRegion';

@Injectable()
export class TeaGrowingRegionService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getAllTeaGrowingRegions(): Observable<TeaGrowingRegion[]> {
        const url = this.globals.apiUrl + '/teas/growingRegions/allGrowingRegions';
        return this.http.get<TeaGrowingRegion[]>(url);
        // todo: error handling
    }

    getTeaGrowingRegionById(id: number): Observable<TeaGrowingRegion> {
        const url = this.globals.apiUrl + '/teas/growingRegions/growingRegion/' + id;
        return this.http.get<TeaGrowingRegion[]>(url)[0];
        // todo: error handling
    }

    createTeaGrowingRegion(teaGrowingRegionOj: TeaGrowingRegion) {
        const url = this.globals.apiUrl + '/teas/growingRegions/create';
        this.http.post(url, teaGrowingRegionOj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTeaGrowingRegion(teaGrowingRegionOj: TeaGrowingRegion) {
        const url = this.globals.apiUrl + '/teas/growingRegions/update';
        this.http.post(url, teaGrowingRegionOj, this.globals.httpJsonOptions);
        // todo: error handling
    }
    deleteTeaGrowingRegion(id: number) {
        const url = this.globals.apiUrl + '/teas/growingRegions/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }
}
