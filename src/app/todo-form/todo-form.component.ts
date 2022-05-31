import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ITodo } from '../models/todo';



@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() createTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();

form!:FormGroup;


  constructor(private fb:FormBuilder) {
   
   }

   

  ngOnInit(): void {
    this.form = this.fb.group({
      "title":['',Validators.required],
      "description":['',Validators.required]
    })
  }

addTodo():void{
 
this.createTodo.emit({ ...this.form.value, done: false, createdAt: new Date() });
this.form.reset();

}
}
