import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TweetModel} from '../model/tweet.model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit, OnDestroy {

  public tweets = [];
  private routeSubscription: Subscription;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.getData(params.slug);
    });
  }

  private getData(slug) {
    this.tweets = [];
    this.http.get('https://backend.itcrowd.hu/route/get/' + slug).subscribe((result) => {
      result['result'][0]['twitter_category'].map((tweet) => {
        this.tweets.push(new TweetModel(tweet));
      });
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

}
