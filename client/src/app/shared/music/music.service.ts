import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MusicService {
  public API = '//localhost:8080';
  public MUSIC_API = this.API + '/musics';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/favorite-music');
  }

  get(id: string) {
    return this.http.get(this.MUSIC_API + '/' + id);
  }

  save(music: any): Observable<any> {
    let result: Observable<Object>;
    if (music['href']) {
      result = this.http.put(music.href, music);
    } else {
      result = this.http.post(this.MUSIC_API, music);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}