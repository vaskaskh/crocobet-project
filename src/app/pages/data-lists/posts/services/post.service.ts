import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private http = inject(HttpClient);

  getPosts(): Observable<Post[] | any> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }


}
