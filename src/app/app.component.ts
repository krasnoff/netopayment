import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'neto-payment';

  active: boolean;

  constructor() {
    this.active = false;
  }

  onClick() {
    this.active = !this.active;
  }
}
