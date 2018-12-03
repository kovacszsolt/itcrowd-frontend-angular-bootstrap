import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private search = '';
  public firstStart = true;
  public tweetList = [];

  routeSubscription: Subscription;


  public set searchText(value) {
    this.search = value;
    this.getSearch(value);
    this.location.replaceState('/search/' + value);
  }

  public get searchText() {
    return this.search;
  }

  constructor(private serviceService: ServiceService, private location: Location, private activeRoute: ActivatedRoute, private title: Title, private meta: Meta) {

  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      if (params.searchText !== undefined) {
        this.searchText = params.searchText;
        this.title.setTitle('ITCrowd . Hu - Search - ' + params.searchText);
        this.meta.addTags([
          {name: 'author', content: 'itcrowd.hu'},
          {name: 'description', content: 'ITCrowd . Hu - Search - ' + params.searchText},
          {name: 'og:image', content: 'https://angular.itcrowd.hu/assets/logo.png'},
          {name: 'og:title', content: 'ITCrowd . Hu - Search - ' + params.searchText},
          {name: 'og:description', content: 'ITCrowd . Hu - Search - ' + params.searchText}
        ]);
      } else {
        this.getSearch('');
      }
    });
  }

  private getSearch(searchText) {
    this.serviceService.search(searchText).subscribe((Result) => {
      this.tweetList = Result;
      this.firstStart = false;
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

}
