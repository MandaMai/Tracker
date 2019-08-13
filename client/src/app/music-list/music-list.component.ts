import { MusicService } from './../shared/music/music.service';
import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../shared/giphy/giphy.service';



@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.scss']
})
export class MusicListComponent implements OnInit {
  musics: Array<any>;

  constructor(private musicService: MusicService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.musicService.getAll().subscribe(data => {
      this.musics = data;
      for (const music of this.musics) {
        this.giphyService.get(music.name).subscribe(url => music.giphyUrl = url);
        console.log(music.id);
        console.log(music.name);
      }
    });
  }

}
