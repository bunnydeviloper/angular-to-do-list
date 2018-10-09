import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>input-button-unit works!</p>
    <p>The title is {{ title }}.</p>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  title: string = "Hello World";

  changeTitle(newTitle: string) {
    this.title = newTitle;
  }

  constructor() {
    this.changeTitle("changed from inside constructor");
  }

  ngOnInit() {
    // this.title = "changed from inside ngOnInit (>constructor)";
  }

}
