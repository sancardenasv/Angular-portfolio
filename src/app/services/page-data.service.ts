import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataInterface } from '../interfaces/page-data.interface';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  info: PageDataInterface = {};
  loaded = false;

  constructor(private http: HttpClient) {
    // Leer data del archivo Json
    this.http.get('assets/data/page-data.json')
      .subscribe((resp: PageDataInterface) => {
        this.loaded = true;
        this.info = resp;
        console.log("LOADING DATA", resp);
      });
  }
}
