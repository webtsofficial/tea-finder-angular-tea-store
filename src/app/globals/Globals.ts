import {Injectable} from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class Globals {
    // Api Url
    apiUrl = '';

    // Http Options
    httpJsonOptions = {
        headers: new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8'),
        withCredentials: true
    };
    httpFileOptions = {
        headers: new HttpHeaders().delete('Content-Type'),
        withCredentials: true
    };
}
