import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent {
  posts: Post[] = [
    {
      title: "Test Title",
      thought: "Test thought right here, I wish it was longer."
    }
  ];

  onSubmit(event) {
    this.posts.push(event);
  }
  
  onDelete() {

  }

}
