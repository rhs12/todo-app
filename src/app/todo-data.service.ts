import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  // Simulate POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);
  }

  deleteTodoById(todoId: number): Observable<Todo> {
    return this.api.deleteTodoById(todoId);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos().delay(3000);
  }

  getTodoById(todoId: number): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.updateTodo(todo);
  }

}
