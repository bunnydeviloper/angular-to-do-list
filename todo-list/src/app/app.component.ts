import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular {{ title }}!</h1>

    <app-list-manager></app-list-manager>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List App';
}
