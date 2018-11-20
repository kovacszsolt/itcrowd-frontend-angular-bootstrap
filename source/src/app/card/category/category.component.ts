import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CardCategoryComponent implements OnInit {

  @Input() categories = [];

  constructor() {
  }

  ngOnInit() {
  }

}
