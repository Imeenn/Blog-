import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {
  posts = [];
  constructor(private servicepost:PostService) {
    this.posts=servicepost.posts;
  }

  ngOnInit() {
  }

}
