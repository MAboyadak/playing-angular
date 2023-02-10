import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost.interface';
// import posts from '../../../posts.json';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  
  @Input('post') post!:IPost;

  
  // public getPosts(){
  //   return this.post;
  // }

  @Output() incEmitter = new EventEmitter();
  @Output() decEmitter = new EventEmitter();

  public incrementFollowers(creatorId:number){
    // console.log(creatorId);
    this.incEmitter.emit(creatorId)
  }

  public decrementFollowers(creatorId:number){
    // console.log(creatorId);
    this.decEmitter.emit(creatorId)
  }
  

}
