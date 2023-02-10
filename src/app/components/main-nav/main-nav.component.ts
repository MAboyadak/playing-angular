import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  @Output() queryEmitter = new EventEmitter();

  filterPosts(query:string):void {
    // console.log(query);
    this.queryEmitter.emit(query);
  }

}
