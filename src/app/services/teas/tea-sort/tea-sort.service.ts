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
  }
  getTeaSortById(id: number): Observable<TeaSort> {
        const url = this.globals.apiUrl + '/teas/sorts/sort/' + id;
        return this.http.get<TeaSort[]>(url)[0];
  }
}
