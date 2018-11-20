export class TweetCategoryModel {
  public _id = '';
  public title = '';
  public slug = '';
  public createdAt = '';
  public updatedAt = '';

  constructor(myObj: any = {}) {
    (<any>Object).assign(this, myObj);
  }
}
