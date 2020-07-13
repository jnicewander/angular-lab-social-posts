import { Component, OnInit } from '@angular/core';
import { listOfPosts } from '../social-posts/social-posts.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  post = listOfPosts;

  constructor() { }

}
