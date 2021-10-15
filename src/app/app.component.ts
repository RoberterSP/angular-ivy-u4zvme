import { Component, VERSION } from '@angular/core';
import { Logger } from './app.service';
import * as _ from 'lodash';

@Component({
  providers: [Logger],
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private service: Logger) {
    this.service.log('this is log');
    let aa = { Id: 2 };
    let bb = { name: 6 };
    console.log(_.merge(aa, bb));
  }

  color = '';
}
