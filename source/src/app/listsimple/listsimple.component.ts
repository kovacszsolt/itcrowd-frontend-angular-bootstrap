import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listsimple',
  templateUrl: './listsimple.component.html',
  styleUrls: ['./listsimple.component.scss']
})
export class ListSimpleComponent implements OnInit {

  @Input() itemList = [];
  constructor() { }

  ngOnInit() {
  }

}
