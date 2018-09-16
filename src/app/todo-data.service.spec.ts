import { TestBed } from '@angular/core/testing';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoDataService = TestBed.get(TodoDataService);
    expect(service).toBeTruthy();
  });
});

describe('#getAllTodos()', () => {

    it('should return an empty array by default', () => {
      const service: TodoDataService = TestBed.get(TodoDataService);
      expect(service.getAllTodos()).toEqual([]);
    });

    it('should return all todos', () => {
      const service: TodoDataService = TestBed.get(TodoDataService);
      let todo1 = new Todo({title: 'Hello 1', complete: false});
      let todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    });

  });
