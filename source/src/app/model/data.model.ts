import {TweetModel} from './tweet.model';

export class DataModel {
  public update = [];
  public tweetList = [];
  public categoryList = [];

  constructor(myObj: any = {}) {
    (<any>Object).assign(this, myObj);
  }
}
