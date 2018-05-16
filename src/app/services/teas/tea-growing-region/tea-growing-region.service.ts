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
    }

    getTeaGrowingRegionById(id: number): Observable<TeaGrowingRegion> {
        const url = this.globals.apiUrl + '/teas/growingRegions/growingRegion/' + id;
        return this.http.get<TeaGrowingRegion[]>(url)[0];
    }
}
