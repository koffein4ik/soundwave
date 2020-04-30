import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../services/artist/artist.service";

@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.less']
})
export class ArtistInfoComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  public ngOnInit(): void {
    this.artistService.getArtistInfoById(1).subscribe(data => {
      console.log(data);
    })
  }

}
