import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {

title:string;
content:string;
  constructor(private servicepost:PostService,private router: Router) {


    
   }



  addPost()
  {
    //add post in firebase
    this.servicepost.savePostToServer();
    this.servicepost.posts.push({titre:this.title,contenu:this.content});
    this.router.navigate(['/posts']);
    console.log('titre'+this.title);


  }
  ngOnInit() {
    
  }

}
