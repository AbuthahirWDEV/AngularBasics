import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from 'src/app/model/todo.types';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  http = inject(HttpClient)

  getTodosFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    return this.http.get<Todo[]>(url)
  }

  constructor() {}
}
