import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  constructor(private api: ApiService) { }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    return this.api.createTodo(todo);
  }

  deleteTodoById(id: number): TodoDataService {
    return this.api.deleteTodoById(todoId);
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    return this.api.updateTodo(todo);
  }

  getAllTodos(): Todo[] {
    return this.api.getAllTodos();
  }

  getTodoById(id: number): Todo {
    return this.api.getTodoById(todoId);
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
