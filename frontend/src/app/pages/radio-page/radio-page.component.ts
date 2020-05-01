import {Component, OnInit} from '@angular/core';
import {GenreService} from "../../services/genre/genre.service";
import {Genre} from "../../models/genre.model";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {Playlist} from "../../models/playlist.model";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'app-radio-page',
  templateUrl: './radio-page.component.html',
  styleUrls: ['./radio-page.component.less']
})
export class RadioPageComponent implements OnInit {

  private genres: Genre[];
  private currentChosenGenreIndex: number = -1;
  private componentName: String = 'radio-page';
  colors: string[] = ["ff6665", "3779bc", "6c65a9", "59cd9c", "a5c94d", "ffbb5a", "6fc3e0", "3333ff", "e43c31", "c44f69", "9d65a9"];

  constructor(private genreService: GenreService, private playerStateService: PlayerStateService) {
  }

  ngOnInit() {
    this.genreService.getGenres().subscribe((value: Genre[]) => {
      this.genres = value;
    })
  }

  getColor(index: number): string {
    return '#' + this.colors[index % this.colors.length];
  }

  imgSrc(name : string): string{
    return "assets/" + name.replace(" ","").toLowerCase() + ".png";
  }

  public chooseGenre(index: number): void {
    this.genreService.getSongsByGenreId(this.genres[index].genre_id).subscribe(data => {
      console.log(data);
      const playlist: Playlist = {
        id: 0,
        name: this.genres[index].name + '-radio',
        songs: this.shuffle(data),
        pictureURL: ''
      };
      const dataToEmit = {
        playlist: playlist,
        indexInPlaylist: 0,
        sender: this.componentName
      };
      dataToEmit.playlist.songs.forEach(song => {
        song.url = ConstantsEnum.backURL + ConstantsEnum.songs + song.url;
        song.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + ConstantsEnum.songs + song.picture_url;
      });
      this.playerStateService.playPlaylist.next(dataToEmit);
      this.currentChosenGenreIndex = index;
    });
  }

  public shuffle(array): any {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

}
