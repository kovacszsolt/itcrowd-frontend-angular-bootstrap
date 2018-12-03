import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {TweetModel} from '../model/tweet.model';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit, OnDestroy {

  public tweet = new TweetModel({});

  public tweetList = [];

  routeSubscription: Subscription;

  constructor(private meta: Meta, private serviceService: ServiceService, private activeRoute: ActivatedRoute, private title: Title) {
  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      this.serviceService.getTweet(params.slug).subscribe((getTweetResponse) => {
          this.tweet = getTweetResponse;
          this.title.setTitle(this.tweet.title);
          this.meta.addTags([
            {name: 'author', content: 'itcrowd.hu'},
            {name: 'description', content: this.tweet.content},
            {name: 'og:image', content: 'https://backend.itcrowd.hu/route/get/image/' + this.tweet.slug + '/size1.jpg'},
            {name: 'og:title', content: this.tweet.title},
            {name: 'og:description', content: this.tweet.content}
          ]);

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
