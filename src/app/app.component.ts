import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 *ngIf="userLoggedIn">Welcome!</h1>

    <app-input-button-unit></app-input-button-unit>
    
    <ul>
      <li *ngFor="let todoItem of todoList">
        {{ todoItem.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
todoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
}
