import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  @Input() categoryList = [];

  constructor() {
  }

  ngOnInit() {
  }

}
