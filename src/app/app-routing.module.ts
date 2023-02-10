import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './pages/post-list/post-list.component';
import { UsersComponent } from './pages/users-list/user-list.component';
import { UserDetailsComponent } from './pages/user-details/user-details.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

const routes: Routes = [
  {path: '', redirectTo:'posts', pathMatch:'full'},
  {path:'posts', component: PostListComponent},
  {path:'post/:id', component: PostDetailsComponent},
  {path:'users', component: UsersComponent},
  {path:'user/:id', component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
