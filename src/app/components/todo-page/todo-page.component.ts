import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';



import { ITodo } from 'src/app/models/todo';
import { TodoRepositoryService } from 'src/app/services/todo-repository.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todos!: ITodo[];
  sub: Subscription[] = [];

  constructor(private todoService: TodoRepositoryService) { }

  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(): void {
    this.sub.push(
      this.todoService.getAll()
        .subscribe((res: ITodo[]) => {
          this.todos = res;
        })
    );
  }

  addTodo(todos: ITodo): void {
    this.sub.push(
      this.todoService.create(todos)
        .subscribe((res: ITodo) => {
          this.getTodo();
        })
    );
  }


  updateTodo(todo: ITodo): void {
    this.sub.push(
      this.todoService.update(todo.id,todo)
        .subscribe((res: ITodo) => {
          this.getTodo();
        })
    );
  }
  deleteTodo(id: number): void {
    this.sub.push(
      this.todoService.deleteById(id)
        .subscribe((res: ITodo) => {
          this.getTodo();
        })
    );
  }

  ngOnDestroy(): void {
    this.sub.forEach((ele: Subscription) => {
      ele.unsubscribe();
    });
  }

}
