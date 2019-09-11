;
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { PostService } from './services/post.service';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  { path: 'new', component: NewPostComponentComponent },
  { path: 'posts', component: PostListComponentComponent },
  { path: '', component: PostListComponentComponent }

  
];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    NewPostComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

    
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
