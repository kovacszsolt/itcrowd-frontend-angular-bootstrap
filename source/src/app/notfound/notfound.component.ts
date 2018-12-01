import {Component, OnInit} from '@angular/core';
import {ServiceRemoteService} from '../service/service-remote.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private appServiceRemote: ServiceRemoteService) {
  }


  ngOnInit() {

  }

  private processData() {

  }

}
