export class TweetContentModel {
  public _id = '';
  public title = '';
  public url = '';
  public content = '';
  public imageurl = '';
  public createdAt = '';
  public updatedAt = '';

  constructor(myObj: any = {}) {
    (<any>Object).assign(this, myObj);
  }
}
