import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicService } from '../shared/music/music.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-music-edit',
  templateUrl: './music-edit.component.html',
  styleUrls: ['./music-edit.component.scss']
})
export class MusicEditComponent implements OnInit, OnDestroy {
  music: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router,
              private musicService: MusicService, private giphyService: GiphyService) {

    }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.musicService.get(id).subscribe((music: any) => {
          if (music) {
            this.music = music;
            this.music.href = music._links.self.href;
            this.giphyService.get(music.name).subscribe(url => music.giphyUrl = url);
          } else {
            console.log(`Music with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/music-list']);
  }

  save(form: NgForm) {
    this.musicService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.musicService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
