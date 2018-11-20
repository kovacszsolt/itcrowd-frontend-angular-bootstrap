import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { HeadComponent } from './head/head.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { CardCategoryComponent } from './card/category/category.component';
import { TweetComponent } from './tweet/tweet.component';
import { TagComponent } from './tag/tag.component';
import { TweetsimpleComponent } from './tweetsimple/tweetsimple.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    HeadComponent,
    ListComponent,
    CardComponent,
    CardCategoryComponent,
    TweetComponent,
    TagComponent,
    TweetsimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
