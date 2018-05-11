import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
           class="todo-input"
           (keyup.enter)="submitValue($event.target.value)">
     <button class="btn"
             (click)="submitValue(inputElementRef.value)">
        Save
      </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World!';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(newTitle: string) {
    this.submit.emit(newTitle);
  }
  
  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
