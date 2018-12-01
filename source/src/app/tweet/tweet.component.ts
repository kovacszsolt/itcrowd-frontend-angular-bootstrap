import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {TweetModel} from '../model/tweet.model';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit, OnDestroy {

  public tweet = new TweetModel({});

  public tweetList = [];

  routeSubscription: Subscription;

  constructor(private serviceService: ServiceService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      this.serviceService.getTweet(params.slug).subscribe((getTweetResponse) => {
          this.tweet = getTweetResponse;
          const categoryIds = getTweetResponse.twitter_category;
          this.serviceService.getTweetsByCategoryMultiple(categoryIds).subscribe((Result) => {
            Result = Result.filter(a => a._id !== this.tweet['_id']);
            Result = Result.sort(this.dynamicSort('title'));
            this.tweetList = [];
            Result.forEach((forEachResult) => {
              if (this.tweetList.filter(tweet => tweet._id === forEachResult._id).length === 0) {
                this.tweetList.push(forEachResult);
              }
            });
          });
        }
      );
    });
  }

  private dynamicSort(property) {
    let sortOrder = 1;
    if (property[0] === '-') {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    };
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
