import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search/search.service";
import {Router} from "@angular/router";
import {serialize} from "@angular/compiler/src/i18n/serializers/xml_helper";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public performSearch(searchText: string): void {
    this.router.navigate(['/search/' + searchText]);
  }

}
