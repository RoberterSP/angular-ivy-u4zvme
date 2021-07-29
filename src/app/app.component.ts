import { Component, VERSION } from '@angular/core';
import { Logger } from './app.service';

@Component({
  providers: [Logger],
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: Logger) {
    this.service.log('this is log');
  }

  color = '';
}
