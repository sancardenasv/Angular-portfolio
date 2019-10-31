import { Component, OnInit } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public pageDataService: PageDataService,
              private router: Router) { }

  ngOnInit() {
  }

  shearchProduct(term: string) {
    if (term.length <= 0) {
      return;
    }
    // console.log("SEARCHING", term);
    this.router.navigate(['/search', term]);
  }

}
