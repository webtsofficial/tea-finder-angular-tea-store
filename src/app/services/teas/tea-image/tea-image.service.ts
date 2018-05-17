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
        // todo: error handling
    }

    getTeaImageById(id: number): Observable<TeaImage> {
        const url = this.globals.apiUrl + '/teas/images/image/' + id;
        return this.http.get<TeaImage[]>(url)[0];
        // todo: error handling
    }

    getTeaImagesByTeaid(teaId: number): Observable<TeaImage[]> {
        const url = this.globals.apiUrl + '/teas/images/tea/' + teaId;
        return this.http.get<TeaImage[]>(url);
        // todo: error handling
    }

    createTeaImage(image: File, imageObj: TeaImage) {// todo: maybe Partial of imageObj because of no url yet - and check if type File is correct for image
        const urlImage = this.globals.apiUrl + '/teas/images/createImageFile';
        const formData = new FormData().append('image', image);
        this.http.post(urlImage, formData, this.globals.httpFileOptions);
        // todo: make imageObj ppost request when image post request sucess = true + insert returned image url
        const urlImageObj = this.globals.apiUrl + '/teas/images/createImageDb';
        this.http.post(urlImageObj, imageObj, this.globals.httpJsonOptions);
        // todo: error handling
    }

    deleteTeaImage(id: number) {
        const url = this.globals.apiUrl + '/teas/images/delete/' + id;
        this.http.get(url);
        // todo: error handling
    }

}
