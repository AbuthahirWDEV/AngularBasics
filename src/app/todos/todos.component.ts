import { Component, OnInit, inject } from '@angular/core';
// using this because TodoComponent is a standalone so we need to use this if we want use directives like ngFor 
import { TodosService } from '../services/todos/todos.service';
import { Todo } from '../model/todo.types';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit  {
  todoService = inject(TodosService)
  todoList: Todo[] = []
  searchTerm: string = ""

  ngOnInit():void {
    this.todoService.getTodosFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe ((todos) => {
      this.todoList = todos;
    })

  }

  updateTodoItem(updateTodo : Todo){
    // update todo item logic here
    this.todoList = this.todoList.map(todo =>
      todo.id === updateTodo.id ?
      {
        ...todo, 
        completed: !todo.completed
      }: todo
    )
  }
}