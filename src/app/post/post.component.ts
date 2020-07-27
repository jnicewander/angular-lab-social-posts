import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Output() deleted = new EventEmitter<void>();
  @Input() post: Post;

  deletePost() {
    this.deleted.emit();
  }

}
