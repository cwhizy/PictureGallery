import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MediaResponse } from '../_models/mediaresponse';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PhotosService {

  user = JSON.parse(localStorage.getItem('currentUser'));

  auth_token = this.user.auth_token;

  headers = {'Authorization': 'Token ' + this.auth_token };
  
  constructor(private http: HttpClient) { }

  public getPhotos(): Observable<MediaResponse> {    
    return this.http.get<MediaResponse>(`${config.apiUrl}/mainfeed/`, {'headers':this.headers});
  }
}