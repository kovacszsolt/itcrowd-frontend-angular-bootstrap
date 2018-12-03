import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  public itemList = [];
  public categoryList = [];
  private slug = '';

  routeSubscription: Subscription;

  constructor(private serviceService: ServiceService, private activeRoute: ActivatedRoute, private title: Title, private meta: Meta) {
  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      this.title.setTitle('ITCrowd . Hu - ' + params.slug);
      this.meta.addTags([
        {name: 'author', content: 'itcrowd.hu'},
        {name: 'description', content: 'ITCrowd . Hu - ' + params.slug},
        {name: 'og:image', content: 'https://angular.itcrowd.hu/assets/logo.png'},
        {name: 'og:title', content: 'ITCrowd . Hu - ' + params.slug},
        {name: 'og:description', content: 'ITCrowd . Hu - ' + params.slug}
      ]);

      this.serviceService.getTweetsByCategorySlug(params.slug).subscribe((getTweetsResult) => {
        console.log('getTweetsResult', getTweetsResult);

        this.itemList = getTweetsResult;
      });
      this.serviceService.getCategory().subscribe((getCategoryResult) => {
        this.categoryList = getCategoryResult;
      });
    });
  }
}
