import {Component, Input, OnInit} from '@angular/core';
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'app-search-results-item',
  templateUrl: './search-results-item.component.html',
  styleUrls: ['./search-results-item.component.less']
})
export class SearchResultsItemComponent implements OnInit {

  @Input()
  pictureURL: string;

  @Input()
  itemName: string;

  @Input()
  urlToGo: string;

  @Input()
  itemId: number;

  private pictureBackURL: string;

  constructor() { }

  ngOnInit() {
    this.pictureBackURL = ConstantsEnum.backURL + 'images' + this.urlToGo + '/' + this.pictureURL;
  }

}
