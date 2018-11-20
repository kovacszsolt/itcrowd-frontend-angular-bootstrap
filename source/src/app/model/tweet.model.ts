import {TweetContentModel} from './tweet.content.model';
import {TweetCategoryModel} from './tweet.category.model';


export class TweetModel {
  public _id = '';
  public twitterId = '';
  public twitter_category = [];
  public text = '';
  public title = '';
  public slug = '';
  public shortlink = '';
  public twitterDate = '';
  public twitter_content = new TweetContentModel();
  public createdAt = '';
  public updatedAt = '';

  constructor(myObj: any = {}) {
    (<any>Object).assign(this, myObj);
    this.twitter_category = [];
    if (myObj['twitter_category']) {
      myObj['twitter_category'].map((result) => {
        this.twitter_category.push(new TweetCategoryModel(result));
      });
    }
    if (myObj['twitter_content']) {
      this.twitter_content = new TweetContentModel(myObj['twitter_content']);
    }
  }
}
