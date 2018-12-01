export class TweetModel {
  public twitter_category = [];
  public twitter_category_full = [];
  public twitter_image = [];
  public _id = '';
  public twitterId = '';
  public text = '';
  public title = '';
  public slug = '';
  public url = '';
  public content = '';
  public imageurl = '';
  public createdAt = '';
  public updatedAt = '';

  constructor(myObj: any = {}) {
    (<any>Object).assign(this, myObj);
  }
}
