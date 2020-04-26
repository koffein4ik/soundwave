import { Component, OnInit } from '@angular/core';
import {GenreService} from "../../services/genre/genre.service";
import {Genre} from "../../models/genre.model";

@Component({
  selector: 'app-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.less']
})
export class RadioPageComponent implements OnInit {

  private genres : Genre[];
  colors: string[] = ["ff6665","3779bc","6c65a9","59cd9c","a5c94d","ffbb5a","6fc3e0","3333ff","e43c31","c44f69","9d65a9"]

  constructor(private genreService: GenreService) { }

  ngOnInit() {
    this.genreService.getGenres().subscribe((value: Genre[]) => {
      this.genres = value;
    })
  }

  getColor(index: number): string{
    return '#' + this.colors[index % this.colors.length];
  }

  chooseGenre(index: number){
      console.log(this.genres[index])
  }

}
