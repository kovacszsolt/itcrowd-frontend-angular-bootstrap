import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TweetModel} from '../model/tweet.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public tweets = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.tweets = [];
    this.getData();
  }

  private getData() {
    this.http.get('https://backend.itcrowd.hu/twitter/tweet/list').subscribe((result) => {
      result['result'].map((tweet) => {
        this.tweets.push(new TweetModel(tweet));
      });
    });
  }
}
