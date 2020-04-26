import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "../../models/artist.model";

@Component({
  selector: 'app-search-results-artists',
  templateUrl: './search-results-artists.component.html',
  styleUrls: ['./search-results-artists.component.less']
})
export class SearchResultsArtistsComponent implements OnInit {

  @Input()
  artists: Artist[];

  constructor() { }

  ngOnInit() {
  }

}
