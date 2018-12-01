import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

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

  constructor(private serviceService: ServiceService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeSubscription = this.activeRoute.params.subscribe(params => {
      this.serviceService.getTweetsByCategorySlug(params.slug).subscribe((getTweetsResult) => {
        this.itemList = getTweetsResult;
      });
      this.serviceService.getCategory().subscribe((getCategoryResult) => {
        this.categoryList = getCategoryResult;
      });
    });
  }
}
