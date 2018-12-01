import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FrontComponent} from './front/front.component';
import {TagComponent} from './tag/tag.component';
import {SearchComponent} from './search/search.component';
import {ListComponent} from './list/list.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {MenuComponent} from './menu/menu.component';
import {ServiceRemoteService} from './service/service-remote.service';
import {ServiceService} from './service/service.service';
import {HttpClientModule} from '@angular/common/http';
import {ListCardComponent} from './list/card/card.component';
import {ListCategoryComponent} from './list/category/category.component';
import {TweetComponent} from './tweet/tweet.component';
import {ListSimpleComponent} from './listsimple/listsimple.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    TagComponent,
    SearchComponent,
    ListComponent,
    NotfoundComponent,
    MenuComponent,
    ListCardComponent,
    ListCategoryComponent,
    TweetComponent,
    ListSimpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiceRemoteService,
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
