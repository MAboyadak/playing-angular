import { Component,Input} from '@angular/core';
import { IComment } from 'src/app/interfaces/ICcomment.interface';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

  @Input() comment!:IComment;

  constructor(){}
  
}
