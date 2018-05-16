import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {Observable} from 'rxjs/Observable';
import {TeaCharacteristic} from '../../../models/Tea/TeaCharacteristic';

@Injectable()
export class TeaCharacteristicService {

  constructor(private http: HttpClient, private globals: Globals) { }

  getAllTeaCharacteristics(): Observable<TeaCharacteristic[]> {
    const url = this.globals.apiUrl + '/teas/characteristics/allCharacteristics';
    return this.http.get<TeaCharacteristic[]>(url);
  }

  getTeaCharacteristicById(id: number): Observable<TeaCharacteristic> {
    const url = this.globals.apiUrl + '/teas/characteristics/characteristic/' + id;
    return this.http.get<TeaCharacteristic[]>(url)[0];
  }

  getTeaCharacteristicsByTeaId(teaId: number): Observable<TeaCharacteristic[]> {
    const url = this.globals.apiUrl + '/teas/characteristics/tea/' + teaId;
    return this.http.get<TeaCharacteristic[]>(url);
  }

}
