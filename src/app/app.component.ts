import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
    <h1 *ngIf="userLoggedIn">Welcome!</h1>

    <app-input-button-unit (submit)="addItem($event)">
    </app-input-button-unit>
    
    <ul>
      <li *ngFor="let todoItem of todoList">
        {{ todoItem.title }}
      </li>
    </ul>

    <ul>
      <li *ngFor="let item of todoList">
        <app-todo-item [item]="todoItem"></app-todo-item>
      </li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'app';
todoList: TodoItem[] = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];

addItem(value: string) {
  this.todoList.push({ title: value });
}

}
