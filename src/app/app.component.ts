import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent } from './pages/post-list/post-list.component';
import { IPost } from './interfaces/IPost.interface';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // directives: [PostListComponent]
})

export class AppComponent{
  title = 'my-app';
  private posts!:Array<IPost>;
  
  constructor(private postService:PostService){}
  
  getPosts():Array<IPost>{
    this.postService.getPosts().subscribe((res)=>{
      this.posts = res;
    });
    return this.posts;
  }

  // filterPosts(query:string):void{

  //   this.postService.filterPosts(query);
  // }

}
