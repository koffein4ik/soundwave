import {Component, Input, OnInit} from '@angular/core';
import {Album} from "../../models/album.model";

@Component({
  selector: 'app-search-results-albums',
  templateUrl: './search-results-albums.component.html',
  styleUrls: ['./search-results-albums.component.less']
})
export class SearchResultsAlbumsComponent implements OnInit {

  @Input()
  albums: Album[];

  constructor() { }

  ngOnInit() {
    console.log(this.albums);
  }

}
