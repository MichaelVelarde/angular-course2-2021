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
  public delete(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}unvaccinated/${id}.json`);
  }

  public create(body:any): Observable<any>{
    return this.http.post(`${this.url}vaccinated.json`, body);
  }
  public createNoVacunados(body:any): Observable<any>{
    return this.http.post(`${this.url}unvaccinated.json`, body);
  }
  public ponerVacuna(id: string, body: any): Observable<any>{
    return this.http.patch(
      `${this.url}unvaccinated/${id}.json`,
      body);
  }
  public agregarNoVacuna(id: string, body: any): Observable<any>{
    return this.http.patch(
      `${this.url}unvaccinated/${id}.json`,
      body);
  }
  

}