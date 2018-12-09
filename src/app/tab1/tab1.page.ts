import { Component } from '@angular/core';
import * as moment from 'moment';

import TimeTracking from '../models/TimeTracking';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  items: TimeTracking[];

  constructor() {
    this.items = [];

    for(let i = 0; i < 50; i++) {
      this.items.push(
        new TimeTracking(
          `Time tracking ${i}`,
          moment()
            .subtract(Math.floor(Math.random() * 24), 'hours')
            .subtract(Math.floor(Math.random() * 60), 'minutes')
            .subtract(Math.floor(Math.random() * 60), 'seconds')
            .toISOString(), null))
    }
  }

  itemSelected(item) {
  }
}
