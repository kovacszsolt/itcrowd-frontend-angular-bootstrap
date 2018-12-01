import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() item = [];

  constructor() {
  }

  ngOnInit() {
  }

}
