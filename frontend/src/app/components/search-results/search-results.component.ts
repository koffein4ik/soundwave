import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../services/search/search.service";
import {ActivatedRoute} from "@angular/router";
import {SearchResults} from "../../models/search-results.model";
import {Playlist} from "../../models/playlist.model";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.less']
})
export class SearchResultsComponent implements OnInit {

  public searchResults: SearchResults;
  public searchResultsPlaylist: Playlist;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.getSearchResults();
  }

  public getSearchResults(): void {
    this.route.params.subscribe(data => {
      this.searchService.search(data.text).subscribe(results => {
        this.searchResults = results;
        console.log(results);
        this.searchResultsPlaylist = {
          name: "search results",
          songs: this.searchResults.songs,
          id: 0,
          pictureURL: ''
        };
      });
    });
    //this.searchService.search(searchText).subscribe(results => console.log(results));
  }

}
