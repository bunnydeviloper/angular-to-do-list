import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
  <div class="todo-item">
  <input type="checkbox"
         class="todo-checkbox"
         (click)="completeItem()"/>
  <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
    {{ item.title }}
  </span>

  <button class="btn btn-red" (click)="removeItem()">
    remove
  </button>
  </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isComplete: boolean = false;

  removeItem() {
    this.remove.emit(this.item);
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  );
  }
  
}
