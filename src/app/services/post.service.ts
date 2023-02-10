import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../interfaces/IPost.interface';
import posts from './../../posts.json';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  // private posts:Array<IPost> = posts;
  private posts!:Array<IPost>;

  // when make DI does it create one object for all comps or one foreach ???????????????? 
  constructor(private http: HttpClient) {}

  getPosts():Observable<Array<IPost>>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id:number|string):Observable<Array<IPost>>{
    return this.http.get<IPost[]>('https://jsonplaceholder.typicode.com/posts/'+id);
  }

  // filterPosts(query:string):void{
  //   let mainPosts = posts;
    
  //   // if query is empty
  //   if(! query){
  //     this.posts = mainPosts;
  //     return;
  //   }

  //   query = query.toLowerCase();
  //   this.posts = this.posts.filter((post)=>{
  //     if(post.title.toLowerCase().indexOf(query) != -1 || post.creator.name.toLowerCase().indexOf(query) != -1 || post.content.toLowerCase().indexOf(query) != -1){
  //     // if(post.title.indexOf(query) != -1){
  //       // console.log(post.title.indexOf(query),post.creator.name.indexOf(query),post.content.indexOf(query));
  //       // console.log(post.title.indexOf(query));
  //       return post;
  //     }
  //     // console.log('query :', query,post.title,post.title.indexOf(query));

  //     // raise error if not exist (not all code path return value though i declared it a void return) 
  //     return;
  //   })

  //   if(this.posts.length === 0)
  //   {
  //     this.posts = mainPosts;
  //   }
  //   // console.log(this.posts);
  // }

  create(post:any){
    return this.http.post('https://jsonplaceholder.typicode.com/posts',post)
  }

  filterPostsByUser(id:string|number){
    this.getPosts().subscribe((res)=>{
      return res.filter((post)=> post.creator.id == id);
    })
  }
  

}
