import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search/search.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  public performSearch(searchText: string): void {
    this.searchService.search(searchText).subscribe(results => console.log(results));
  }

}
