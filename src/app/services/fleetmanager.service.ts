import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apikey', apiKey);

@Injectable({
  providedIn: 'root'
})
export class FleetmanagerService {

  constructor(private http: HttpClient) { }

  getData(url){

    return this.http.get(`${apiUrl}/${url}`, { }).pipe(
      tap(value => {
        console.log(value);
      })

    );
    /*
    return this.http.get(`${apiUrl}/${url}`, { params }).pipe(
      tap(value => {
      //console.log(value);
      })

    )
    */
  }
}