import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo';

import { TodoFacadeService } from 'src/app/services/todoFacade.service';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  todos!: ITodo[];
  sub!: Subscription;
  crypted:boolean = false;

  constructor(private facadeService: TodoFacadeService) { }

  

  ngOnInit(): void {
    this.facadeService.updateTodoList();
    this.subscribe();
  }

  subscribe(): void {
    this.sub = this.facadeService.getTodos()
      .subscribe((res: ITodo[]) => {
        this.todos = res;
        
      });
  }

  updateTodo(todos: ITodo): void {
    this.facadeService.updateTodo(todos);
  }

  addTodo(todo: ITodo): void {
    this.facadeService.addTodo(todo);
  }

  deleteTodo(id: number): void {
    this.facadeService.deleteTodo(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  
  }
  }





