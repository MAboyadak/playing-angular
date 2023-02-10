import { Component, Input } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost.interface';
import { ActivatedRoute } from "@angular/router";
import { PostService } from 'src/app/services/post.service';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from 'src/app/services/user.service';
import { IComment } from 'src/app/interfaces/ICcomment.interface';
import { CommentService } from 'src/app/services/comment.service';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent {
  // @Input() post!:IPost;
  
  private id!:any;
  private post!:any;
  private user!:IUser;
  private comments!:Array<IComment>

  constructor(private activatedRoute: ActivatedRoute,
            private postService:PostService,
            private userService:UserService,
            private commentService:CommentService
          ){}

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.postService.getPost(this.id).subscribe((res)=>{
      
      this.post = res;
      this.post['image'] = 'https://picsum.photos/400/300';
      this.post["creator"] = {
        id: 4,
        name: "Patricia Lebsack",
        followers: "100",
        isOnline: false,
        isFollowing: false
      }
      // console.log(this.posts)

      this.userService.getUser(this.post.userId!).subscribe((res)=>{
      
        this.user = res; 
        // console.log(this.posts)
  
      });
  
      this.commentService.getAll(this.post.id).subscribe((res)=>{
        this.comments = res;
      });

    });
    

  }

  getComments():Array<IComment>{
    return this.comments; 
  }

  public onIncrement(creatorId:number){
        this.post.creator.followers = String(Number(this.post.creator.followers) + 1)
        this.post.creator.isFollowing = true;
  }

  public onDecrement(creatorId:number){
    this.post.creator.followers = String(Number(this.post.creator.followers) - 1)
    this.post.creator.isFollowing = false;
  }

  getPost(){
    return this.post;
  }

}
