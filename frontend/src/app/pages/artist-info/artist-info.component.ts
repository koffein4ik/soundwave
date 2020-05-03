import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../services/artist/artist.service";
import {ActivatedRoute} from "@angular/router";
import {Artist} from "../../models/artist.model";
import {Album} from "../../models/album.model";
import {Song} from "../../models/song.model";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.less']
})
export class ArtistInfoComponent implements OnInit {

  public artist: Artist;
  public albums: Album[];
  public songs: Song[];

  constructor(private artistService: ArtistService, private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.artistService.getArtistInfoById(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      this.artist = data.artistInfo.artist;
      this.artist.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + "artist/" + this.artist.picture_url;
      this.albums = data.artistInfo.albums;
      this.songs = data.artistInfo.songs;
    })
  }

}
