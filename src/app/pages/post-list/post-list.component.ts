import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  
})
export class PostListComponent {

  @Input() query!:string;

  private posts:Array<IPost> = [];
  private originalPosts:Array<IPost> = [];

  constructor(private postService: PostService){
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((res)=>{
      
      this.posts = res.splice(0, 10).map((post)=>{
        post['image'] = 'https://picsum.photos/400/300';
        post["creator"] = {
          id: 2,
          name: "Patricia Lebsack",
          followers: "100",
          isOnline: false,
          isFollowing: false
        }
        // console.log(post)
        return post;
      });
      this.originalPosts = this.posts;
    });
  }


  public getPosts(){
    return this.posts;
  }

  public filterPosts(query:string,):void{

    query = query.toLowerCase();

    if(! query){
      this.posts = this.originalPosts;
      return;
    }  

    this.posts = this.posts.filter((post)=>{        

      // console.log('query index: ' + post.title.indexOf(query))
      if(post.title.toLowerCase().indexOf(query) != -1){
        return post;
      }
      // raise error if not exist (not all code path return value though i declared it a void return) 
      return;
    })

  }
  
  public onIncrement(creatorId:number){
    // console.log(creatorId, ' increment from parent list')

    this.posts.forEach((post)=>{
      
      if(post.creator.id == creatorId){
        // let newcount = Number(post.creator.followers) + 1;
        post.creator.followers = String(Number(post.creator.followers) + 1)
        post.creator.isFollowing = true; 
      }

    })
  }

  public onDecrement(creatorId:number){
    // console.log(creatorId, ' decrement from parent list')
    
    this.posts.forEach((post)=>{
      
      if(post.creator.id == creatorId){
        post.creator.followers = String(Number(post.creator.followers) - 1)
        // console.log(post)
        post.creator.isFollowing = false;
        // console.log(post)

      }

    })
  }

}
