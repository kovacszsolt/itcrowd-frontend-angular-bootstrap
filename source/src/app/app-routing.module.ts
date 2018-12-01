import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FrontComponent} from './front/front.component';
import {TagComponent} from './tag/tag.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {SearchComponent} from './search/search.component';
import {TweetComponent} from './tweet/tweet.component';

const routes: Routes = [
  {
    path: '',
    component: FrontComponent
  },
  {
    path: 'tag/:slug',
    component: TagComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'search/:searchText',
    component: SearchComponent
  },
  {
    path: '404',
    component: NotfoundComponent
  },
  {
    path: ':slug',
    component: TweetComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
