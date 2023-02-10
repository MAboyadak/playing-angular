import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { PostService } from 'src/app/services/post.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent {
  @Input() user!:IUser;

  constructor(private postService:PostService){
    // console.log(this.user);
  }

  onSubmit(form:NgForm){
    
    // console.log(form.value)
    // console.log(this.user)
    let values = form.value;

    let post = {
      title:values.title,
      body:values.body,
      userId:this.user.id
    }

    this.postService.create(post).subscribe((res:any)=>{
      console.log(res)
      alert('New post has been created with id :' + res.id);
    })

  }
}
