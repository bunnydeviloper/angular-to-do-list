import { Injectable } from '@angular/core';

const storageName = "todo-list-storage";

@Injectable({
  providedIn: 'root'
})

  /*
export class StorageService {
  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName));
  }

  // get items
  get() {
    return [...this.todoList];
  }

  // add a new item
  post(item) {}

  // update an item
  put(item, changes) {}

  // remove an item
  destroy(item) {}
}
   */

/*
*/
export class StorageService {

  constructor() { }

  getData(key: string) {
    JSON.parse(localStorage.getItem(key));
  }

  setData(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
