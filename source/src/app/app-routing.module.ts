import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FrontComponent} from './front/front.component';
import {TweetComponent} from './tweet/tweet.component';
import {TagComponent} from './tag/tag.component';

const routes = [
  {
    path: '',
    component: FrontComponent,
  },
  {
    path: ':slug',
    component: TweetComponent
  },
  {
    path: 'tag/:slug',
    component: TagComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
