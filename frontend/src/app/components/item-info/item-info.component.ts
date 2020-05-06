import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../models/song.model";
import {Album} from "../../models/album.model";
import {Playlist} from "../../models/playlist.model";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {AuthService} from "../../services/auth/auth.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.less']
})
export class ItemInfoComponent implements OnInit{

  @Input()
  name: string;

  @Input()
  isPlaylist: boolean;

  @Input()
  isPlaylistShared: number;

  @Input()
  playlistOwnerId: number;

  @Input()
  pictureURL: string;

  @Input()
  songs: Song[];

  @Input()
  albums: Album[];

  public playlist: Playlist;
  public isCurrUserOwns: boolean = false;
  public id: number

  constructor(private playlistService: PlaylistService, private authService: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params['id']);
   }

  public ngOnInit(): void {
    this.isCurrUserOwns = this.isCurrentUserOwnsPlaylist();
    this.songs.forEach(song => {
      song.url = ConstantsEnum.backURL + ConstantsEnum.songs + song.url;
      song.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + ConstantsEnum.songs + song.picture_url;
    });
    this.playlist =  {
      id: 0,
      userId: -1,
      name: this.name + '-info',
      songs: this.songs,
      shared: 0,
      pictureURL: this.pictureURL
    }
  }

  public toggleChange(value): void {
    this.playlistService.changePlaylistSharedState(this.id, value.checked ? 1 : 0).subscribe();
  }

  public isCurrentUserOwnsPlaylist(): boolean {
    const currUserId = JSON.parse(atob(this.authService.getToken().split('.')[1])).userId;
    return this.playlistOwnerId === currUserId;
  }
}
