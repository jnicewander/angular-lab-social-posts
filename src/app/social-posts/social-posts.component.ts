import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  posts: Post[] = [];
  showForm: boolean;

  onSubmit(event) {
    this.posts.push(event);
    this.showForm = false;
  }

  newPost() {
      this.showForm = !this.showForm;
  }

}
