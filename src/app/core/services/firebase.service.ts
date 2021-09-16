import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  url=environment.app.apiBaseUrl;
  constructor(private http: HttpClient) { }

  public getAllVacunados():Observable<any>{
    return this.http.get(`${this.url}vaccinated.json`)
  }

  public getAllNoVacunados():Observable<any>{
    return this.http.get(`${this.url}unvaccinated.json`)
  }

}