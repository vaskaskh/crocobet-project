import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo, User} from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  #http = inject(HttpClient);

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.#http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserPost(id: string): Observable<any> {
    return this.#http.get<any>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
}
  getUserTodo(id:string):Observable<Todo[]>{
    return this.#http.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos?id=${id}`)
  }

}
