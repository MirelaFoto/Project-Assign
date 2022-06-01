import { Injectable } from '@angular/core';
import { TodoRepositoryService } from './todo-repository.service';
import { ITodo } from '../models/todo';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {
  todos$: BehaviorSubject<ITodo[]> = new BehaviorSubject<ITodo[]>([]);
  sub!: Subscription;

  constructor(private todoService: TodoRepositoryService) { }

  getTodos(): Observable<ITodo[]> {
    return this.todos$.asObservable();
  }

  updateTodoList(): void {
    this.sub = this.todoService.getAll()
      .subscribe((res: ITodo[]) => {
        this.todos$.next(res);
        this.sub.unsubscribe();
      });    
  }

  updateTodo(todo: ITodo): void {
    this.sub = this.todoService.update(todo.id,todo)
      .subscribe((res: ITodo) => {
        this.sub.unsubscribe();
        this.updateTodoList();
      });
  }

  addTodo(todo: ITodo): void {
    this.sub = this.todoService.create(todo)
      .subscribe((res: ITodo) => {
        this.sub.unsubscribe();
        this.updateTodoList();
      });
  }

  deleteTodo(id: number): void {
    this.sub = this.todoService.deleteById(id)
      .subscribe((res: ITodo) => {
        this.sub.unsubscribe();
        this.updateTodoList();
      });
  }
}
