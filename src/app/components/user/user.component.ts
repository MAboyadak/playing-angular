import { Component, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/interfaces/IUser.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user!: IUser;

  
}
