import { Component } from '@angular/core';
import { PageDataService } from './services/page-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public pageDataService: PageDataService) {

  }
}
