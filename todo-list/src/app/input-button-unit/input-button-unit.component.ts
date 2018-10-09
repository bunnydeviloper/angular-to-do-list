import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>input-button-unit works!</p>
    <p>The title is {{ title }}.</p>
    <input
      [value]="title"
      (keyup)="changeTitle($event.target.value)" >
    <button (click)="changeTitle('Button clicked!')" >Save</button>
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
