import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,RouterLink],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
 posts : Post[] = [];

 constructor (public postService : PostService) {}

 ngOnInit(): void{
  this.postService.getAll().subscribe((data : Post[])=>{
    this.posts = data;
      console.log(this.posts);    
  })
 }
 deletePost(id : number){
  this.postService.delete(id).subscribe(res=>{
    this.posts = this.posts.filter(item=>item.id!==id);
    alert("post deleted successful !!")
    
  })

 }

}
