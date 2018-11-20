import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TweetModel} from '../model/tweet.model';

@Component({
  selector: 'app-tweetsimple',
  templateUrl: './tweetsimple.component.html',
  styleUrls: ['./tweetsimple.component.scss']
})
export class TweetsimpleComponent implements OnInit {

  public tweets = [];

  private categoryNames = '';

  @Input('category_list')
  set category_list(value: string) {
    if (value !== '') {
      this.categoryNames = value;
      this.getData();
    }
  }

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.tweets = [];
  }

  private getData() {
    this.http.get('https://backend.itcrowd.hu/twitter/tweet/multiplecategory/' + this.categoryNames).subscribe((result) => {
      this.tweets = result['result'];
    });
  }
}
