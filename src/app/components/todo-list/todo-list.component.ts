import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() todos!:ITodo[]
@Output() updateTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();
}
