import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../services/genre.service";
import {Genre} from "../../models/genre.model";

@Component({
  selector: 'app-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.less']
})
export class RadioPageComponent implements OnInit {

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe((value: Genre[]) => {
      console.log(value);
    })
  }

}
