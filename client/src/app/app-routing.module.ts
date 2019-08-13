import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicEditComponent } from './music-edit/music-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/music-list', pathMatch: 'full' },
  { path: 'music-list', component: MusicListComponent },
  { path: 'music-add', component: MusicEditComponent },
  { path: 'music-edit/:id', component: MusicEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
