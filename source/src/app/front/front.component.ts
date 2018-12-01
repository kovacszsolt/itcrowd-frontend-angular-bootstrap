import {Component, HostListener, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  public itemList = [];
  public categoryList = [];
  private pageNumber = 1;

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.pageNumber++;
      this.getTweetList();
    }
  }

  constructor(private serviceService: ServiceService) {
  }

  ngOnInit() {

    this.serviceService.getCategory().subscribe((getCategoryResult) => {
      this.categoryList = getCategoryResult;
    });
    this.getTweetList();
  }

  private getTweetList() {
    this.serviceService.getTweets(this.pageNumber).subscribe((getTweetsResult) => {
      getTweetsResult.forEach((item) => {
        this.itemList.push(item);
      });

    });
  }

}
