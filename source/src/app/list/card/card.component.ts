import {Component, Input, OnInit} from '@angular/core';
import {TweetModel} from '../../model/tweet.model';

@Component({
  selector: 'app-list-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ListCardComponent implements OnInit {
  @Input() item = new TweetModel({});

  constructor() {
  }

  ngOnInit() {
  }

}
