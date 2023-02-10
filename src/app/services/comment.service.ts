import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IComment } from '../interfaces/ICcomment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getAll(postId:number|string):Observable<Array<IComment>>{
    return this.http.get<IComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
  }
  
}
