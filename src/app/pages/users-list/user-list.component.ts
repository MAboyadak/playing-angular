import { Component } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UsersComponent {
  
  private users:IUser[] = []; 

  constructor(private userService: UserService){
    // this.showUsers();
    this.userService.getUsers().subscribe((res)=>{
      this.users = res;
    })

    
    console.log('user-list')
  }

  getUsers():Array<IUser> {
    return this.users;
  };
}