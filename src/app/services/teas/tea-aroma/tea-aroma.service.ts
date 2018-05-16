import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../../globals/Globals';
import {TeaAroma} from '../../../models/Tea/TeaAroma';

@Injectable()
export class TeaAromaService {

  constructor(private http: HttpClient, private globals: Globals) {}

  getTeaAromas(): Observable<TeaAroma[]> {
    const url = this.globals.apiUrl + '/teas/aromas/allAromas';
    return this.http.get<TeaAroma[]>(url);
  }

  getTeaAromaById(id: number): Observable<TeaAroma> {
    const url = this.globals.apiUrl + '/teas/aromas/aroma/' + id;
    return this.http.get<TeaAroma[]>(url)[0];
  }

  getTeaAromasByTeaId(teaId: number): Observable<TeaAroma[]> {
    const url = this.globals.apiUrl + 'teas/aromas/tea/' + teaId;
    return this.http.get<TeaAroma[]>(url);
  }

}
