import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {

  @Output() submitted = new EventEmitter<Post>();

  submitPost(submitNewPost: NgForm) {
    this.submitted.emit(
      {
        title: submitNewPost.value.title,
        thought: submitNewPost.value.thought
      }
    );
  }
}
