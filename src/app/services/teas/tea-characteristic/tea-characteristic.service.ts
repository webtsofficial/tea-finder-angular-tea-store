import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaCharacteristic} from '../../../models/Tea/TeaCharacteristic';

@Injectable()
export class TeaCharacteristicService {

    constructor(private http: HttpClient, private globals: Globals) {
    }

    getAllTeaCharacteristics(): Observable<TeaCharacteristic[]> {
        const url = this.globals.apiUrl + '/teas/characteristics/allCharacteristics';
        return this.http.get<TeaCharacteristic[]>(url);
        // todo: error handling

    }

    getTeaCharacteristicById(id: number): Observable<TeaCharacteristic> {
        const url = this.globals.apiUrl + '/teas/characteristics/characteristic/' + id;
        return this.http.get<TeaCharacteristic[]>(url)[0];
        // todo: error handling
    }

    getTeaCharacteristicsByTeaId(teaId: number): Observable<TeaCharacteristic[]> {
        const url = this.globals.apiUrl + '/teas/characteristics/tea/' + teaId;
        return this.http.get<TeaCharacteristic[]>(url);
        // todo: error handling
    }

    createTeaCharacteristic(teaCharacteristicObj: TeaCharacteristic) {
        const url = this.globals.apiUrl + '/teas/characteristics/create';
        this.http.post(url, teaCharacteristicObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    updateTeaCharacteristic(teaCharacteristicObj: TeaCharacteristic) {
        const url = this.globals.apiUrl + '/teas/characteristics/update';
        this.http.post(url, teaCharacteristicObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    deleteTeaCharacteristic(id: number) {
        const url = this.globals.apiUrl + '/teas/characteristics/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }

}
