import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  template: `
    <div class="todo-item">
      <input
        class="todo-checkbox"
        type="checkbox"
        (click)="completeItem()"
      />

      <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
        {{ item.title }}
      </span>

      <button class="btn btn-red" (click)="removeItem()"> X </button>
    </div>
    `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item: TodoItem;

  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();

  // @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  removeItem() {
    this.remove.emit(this.item);
  }

  isComplete: boolean = false;

  completeItem() {
    this.isComplete = !this.isComplete;
  }

  /* NOTE: only changing the view for now, no need to emit
  completeItem() {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed }
    });
  }
  */

}
