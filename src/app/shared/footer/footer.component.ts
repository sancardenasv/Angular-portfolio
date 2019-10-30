import { Component, OnInit } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(public pageDataService: PageDataService) { }

  ngOnInit() {
  }

}
