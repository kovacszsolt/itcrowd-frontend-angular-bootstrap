import {Injectable} from '@angular/core';
import {ServiceRemoteService} from './service-remote.service';
import {parse, stringify} from 'flatted/esm';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private ITEMS_PET_PAGE = 6;

  public constructor(private appServiceRemote: ServiceRemoteService) {
  }

  public getTweets(pageNumber = 1) {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.tweetList.slice((pageNumber - 1) * this.ITEMS_PET_PAGE, pageNumber * this.ITEMS_PET_PAGE);
      }));
  }

  public search(searchText) {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.tweetList.filter(filterResult => filterResult.title.toLowerCase().includes(searchText.toLowerCase()));
      }));
  }


  public getTweetsAll() {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.tweetList;
      }));
  }

  public getCategory() {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.categoryList;
      }));
  }

  public getTweetsByCategorySlug(categorySlug) {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.categoryList.find(category => category.slug === categorySlug).tweets;
      }));
  }


  public getTweet(tweetSlug) {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        return response.tweetList.find(a => a.slug === tweetSlug);
      }));
  }

  public getTweetsByCategoryMultiple(categoryIds) {
    return this.appServiceRemote.getData().pipe(
      map((response) => {
        let tweetList = [];
        response.categoryList.filter(filterResult => categoryIds.includes(filterResult._id)).forEach((forEachResult) => {
          tweetList = tweetList.concat(forEachResult.tweets);
        });

        return tweetList;
      }));
  }
}
