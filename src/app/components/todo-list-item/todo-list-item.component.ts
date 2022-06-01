import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
cestinoUrl="https://previews.123rf.com/images/arhimicrostok/arhimicrostok1706/arhimicrostok170600362/79549735-cestino-pu%C3%B2-essere-l-icona-elimina-sposta-nel-cestino-deseleziona-lo-spazio-su-disco-illustrazione-v.jpg"
  constructor() { }

  ngOnInit(): void {
  }
  @Input() crypted!: boolean;
@Input() todos!: ITodo;
@Output() updateTodo: EventEmitter<ITodo> = new EventEmitter<ITodo>();
  @Output() deleteTodo: EventEmitter<number> = new EventEmitter<number>();

}
