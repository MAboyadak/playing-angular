import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { IPost } from 'src/app/interfaces/IPost.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  private user!: IUser;
  private id!:any;
  private posts!: Array<IPost>;

  constructor(private activatedRoute: ActivatedRoute, private userService:UserService,private postService: PostService){
  };

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.postService.getPosts().subscribe((res)=>{
      
      this.posts = res.filter((post)=>{
        return post.userId==this.id;
      }).map( post => {

          post['image'] = 'https://picsum.photos/400/300';
          post["creator"] = {
            id: 4,
            name: "Patricia Lebsack",
            followers: "100",
            isOnline: false,
            isFollowing: false
          }

          return post ;
      })

    });
    
    this.userService.getUser(this.id).subscribe((res)=>{
      this.user = res;
    });

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

  getUser():IUser{
    // console.log(this.user);
    return this.user;
  }

  getPosts():Array<IPost>{
    // console.log(this.posts);
    return this.posts;
  }


}