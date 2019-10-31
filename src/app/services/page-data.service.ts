import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageDataInterface } from '../interfaces/page-data.interface';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {
  info: PageDataInterface = {};
  team: any[] = [];
  loaded = false;

  constructor(private http: HttpClient) {
    this.getPageData();
    this.getTeamData();
  }

  private getPageData() {
    // Leer data del archivo Json
    this.http.get('assets/data/page-data.json')
      .subscribe((resp: PageDataInterface) => {
        this.loaded = true;
        this.info = resp;
        // console.log("LOADING DATA", resp);
      });
  }

  private getTeamData() {
    // Leer data del archivo Json
    this.http.get('https://angular-html-e80a0.firebaseio.com/team.json')
      .subscribe((resp:any[]) => {
        this.team = resp;
        // console.log("LOADING TEAM", resp);
      });
  }
}
