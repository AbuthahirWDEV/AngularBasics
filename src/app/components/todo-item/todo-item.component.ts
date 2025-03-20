import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/model/todo.types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item!:Todo
  @Output() todoToggled = new EventEmitter<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.item)
  }
}
