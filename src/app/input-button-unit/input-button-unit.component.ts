import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input #inputElementRef
           [value]="title"
           (keyup.enter)="changeTitle(inputElementRef)">
      <button (click)="changeTitle(inputElementRef)">
        Save
      </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World!';

  constructor() {
  }

  ngOnInit() {
  }

  changeTitle(inputElementReference) {
    console.log(inputElementReference);
    this.title = inputElementReference.value;
  }

}
