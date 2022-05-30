import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';



import { ITodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

todos: ITodo[] = [
  {
    id: 1,
    title: 'Salvare il gattino della signora Linda',
    description: "Il gattino si è arrampicato sull'albero e non vuole più scendere",
    done: false,
    createdAt:25/5/2020
  },
  {
    id: 2,
    title: 'Aprire la porta di casa del signor Mario',
    description: "Il signor Mario ha chiuso distrattamente la porta di casa lasciando le chiavi dentro",
    done: false,
    createdAt: 20/5/2021
  },
  {
    id: 3,
    title: "Thomas è in ritardo per l'appuntamento",
    description: "Thomas deve andare ad un appuntamento alle 10. Il dormiglione però si è svegliato alle 09:50",
    done: true,
    createdAt: 16/5/2022
  }

]
  constructor() { }

  ngOnInit(): void {
  }
add(f:any){

 return this.todos = [...this.todos, f]

}
}
