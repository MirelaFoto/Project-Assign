import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from 'src/app/models/todo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {
 
  constructor(private http: HttpClient) { }

  getAll(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>('http://localhost:3000/todos');
  }

  getById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`http://localhost:3000/todos/${id}`);
  }

  create(todo: ITodo): Observable<ITodo> {
    return this.http.post<ITodo>('http://localhost:3000/todos', todo);
  }

  update(id: number, todo: ITodo): Observable<ITodo> {
    return this.http.put<ITodo>(`http://localhost:3000/todos/${id}`, todo);
  }

  deleteById(id: number): Observable<ITodo> {
    return this.http.delete<ITodo>(`http://localhost:3000/todos/${id}`);
  }

}
