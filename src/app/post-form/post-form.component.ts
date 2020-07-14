import { Component, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() submitted = new EventEmitter<Post>();

  submitPost() {
    this.submitted.emit();
  }
}
