import {Component, OnDestroy, OnInit} from '@angular/core';
import {TweetModel} from '../model/tweet.model';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent implements OnInit, OnDestroy {

  public tweet = new TweetModel();
  private routeSubscription: Subscription;
  public categoryList = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.getData(params.slug);
    });
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }

  private getData(slug) {
    this.http.get('https://backend.itcrowd.hu/route/get/' + slug).subscribe((result) => {
      this.tweet = new TweetModel(result['result'][0]['twitter_tweet']);
      this.categoryList = result['result'][0]['twitter_tweet'].twitter_category.map((a) => {
        return a.title;
      }).join(',');
    });
  }
}
