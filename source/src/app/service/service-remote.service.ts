import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {forkJoin, Observable} from 'rxjs';
import {parse, stringify} from 'flatted/esm';
import {DataModel} from '../model/data.model';
import {TweetModel} from '../model/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceRemoteService {

  private tweets = [];

  private readonly STORAGE_KEY_TWEETLIST = 'TWEETLIST';
  private readonly STORAGE_KEY_CATEGORYLIST = 'CATEGORYLIST';
  private readonly STORAGE_KEY_UPDATE = 'UPDATE';
  private readonly REFRESH_TIME = 10;

  public constructor(private http: HttpClient) {
  }


  public getData(): Observable<DataModel> {
    return new Observable((observer) => {
        if (this.update()) {
          this.getFromServer().subscribe((data) => {
            data.tweetList.map((tweet) => {
              tweet.twitter_category_full = [];
              tweet.twitter_category.forEach((category) => {
                tweet.twitter_category_full.push(data.categoryList.find(findResult => findResult._id === category));
              });
              return tweet;
            });
            data.categoryList.map((category) => {
              category.tweets = data.tweetList.filter(
                tweetListFilterResult => tweetListFilterResult.twitter_category.includes(category._id)
              );
              return category;
            });

            localStorage.setItem(this.STORAGE_KEY_TWEETLIST, stringify(data.tweetList));
            localStorage.setItem(this.STORAGE_KEY_CATEGORYLIST, stringify(data.categoryList));
            localStorage.setItem(this.STORAGE_KEY_UPDATE, stringify({value: data.update, date: Date.now()}));
            observer.next(data);
          });
        } else {
          observer.next(
            new DataModel({
              update: parse(localStorage.getItem(this.STORAGE_KEY_UPDATE)),
              tweetList: parse(localStorage.getItem(this.STORAGE_KEY_TWEETLIST)),
              categoryList: parse(localStorage.getItem(this.STORAGE_KEY_CATEGORYLIST))
            })
          );
        }
      }
    );
  }

  private update() {
    let _return = (localStorage.getItem(this.STORAGE_KEY_UPDATE) !== null);
    if (_return) {
      _return = (Date.now() > Number(parse(localStorage.getItem(this.STORAGE_KEY_UPDATE)).date) + (this.REFRESH_TIME * 1000));
    }
    return _return;
  }

  private getFromServer() {
    return forkJoin([this.getServerUpdate(), this.getServerTweetList(), this.getServerCategoryList()]).pipe(
      map((response) => {
        if (response[0] === undefined) {
          response[0] = 'dummy';
        }
        return {
          update: response[0],
          tweetList: response[1],
          categoryList: response[2]
        };
      })
    );
  }


  public getServerTweetList(): Observable<TweetModel[]> {
    return this.http.get<any>('https://backend.itcrowd.hu/twitter/tweet/list').pipe(
      map((response) => {
          const tweetList = [];
          response.result.forEach((a) => {
            tweetList.push(new TweetModel(a));
          });
          return tweetList;
        }
      )
    );
  }

  public getServerUpdate() {
    return this.http.get<any>('https://backend.itcrowd.hu/settings/updatetime/').pipe(
      map((response) => {
          return response.result;
        }
      )
    );
  }

  public getServerCategoryList() {
    return this.http.get<any>('https://backend.itcrowd.hu/twitter/category/list').pipe(
      map((response) => {
          return response.result;
        }
      )
    );
  }


}
