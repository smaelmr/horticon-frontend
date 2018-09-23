import { Component, OnInit } from '@angular/core';

export class Todo {
  desc: string;
}

@Component({
  selector: 'app-planting',
  templateUrl: './planting.component.html',
  styleUrls: ['./planting.component.css']
})
export class PlantingComponent implements OnInit {

  todo: Todo = new Todo();
  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
  }

  save(todo: Todo) {
    this.todos.push(todo);
    this.todo = new Todo();
    this.todos = Object.assign([], this.todos);
  }
  delete(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
  }

}
