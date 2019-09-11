import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {
 
 
  @Input() title: string;
  @Input() content: string;
  @Input() index: number;


  
  loveIts: number=0;
  bool:Boolean;
  date=new Date();
  constructor(private servicepost:PostService,private router: Router) {
  }

  ngOnInit() {
  }


  Loveit()
{
  this.loveIts=this.loveIts+1;
  if(this.loveIts>0)
  {
  this.bool=true;
  
  }
  else{
    this.bool=false;
  
  }
//ajout a firebase
  this.servicepost.enregistrerNblove(this.loveIts);
  this.servicepost.nblove=this.loveIts;


}
dontLoveit()
{

  this.loveIts=this.loveIts-1;

  if(this.loveIts>0)
  {
  this.bool=true;
  
  }
  else{
    this.bool=false;
  
  }
this.servicepost.nblove=this.loveIts;
}
deletePost()
{
this.servicepost.posts.splice(this.index,1);
  console.log("index"+this.index);
  this.router.navigate(['/posts']);

}

}
