import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <input
      #inputElementRef
      [value]="title"
      (keyup.enter)="changeTitle($event.target.value)" >
    <button (click)="changeTitle(inputElementRef.value)" >Save</button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
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

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

}
