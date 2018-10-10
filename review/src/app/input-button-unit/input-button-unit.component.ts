import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      class="todo-input"
      #inputElementRef
      [value]="title"
      (keyup.enter)="submitValue($event.target.value)" >
    <button class="btn" (click)="submitValue(inputElementRef.value)" >Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title: string = "Hello World";

  constructor() {
  }

  ngOnInit() {
    /*
    setTimeout(() => {
      this.title = "changed after 3s";
    }, 3000);
    */
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}