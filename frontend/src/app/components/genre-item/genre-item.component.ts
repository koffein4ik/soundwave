import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Genre } from 'src/app/models/genre.model';

@Component({
  selector: 'app-genre-item',
  templateUrl: './genre-item.component.html',
  styleUrls: ['./genre-item.component.less']
})
export class GenreItemComponent implements OnInit {

  @Input()
  genre: Genre;

  @Input()
  color: string;

  @Output()
  onClick = new EventEmitter<any>();;

  hover: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  get hoverColor(): string{
    return this.hover ? this.color : "transparent"
  }

  get textColor(): string{
    return this.hover ? this.color : "white"
  }

  get imgSrc(): string{
    return "assets/" + this.genre.name.replace(" ","").toLowerCase() + ".png";
  }

}
