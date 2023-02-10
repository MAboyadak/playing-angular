import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './pages/post-list/post-list.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { UsersComponent } from './pages/users-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    MainNavComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CreatePostComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
