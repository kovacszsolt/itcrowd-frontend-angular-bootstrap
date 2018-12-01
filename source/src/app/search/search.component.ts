import {Component, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

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

  constructor(private serviceService: ServiceService, private location: Location, private activeRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      if (params.searchText !== undefined) {
        this.searchText = params.searchText;
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
