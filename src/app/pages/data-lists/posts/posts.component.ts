import {Component, inject, OnInit} from '@angular/core';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PostService } from './services/post.service';
import {Post} from './models/post.model';
import {NzModalService} from 'ng-zorro-antd/modal';
import {PostDetailsComponent} from './components/post-details/post-details.component';

@Component({
  selector: 'app-posts',
  imports: [
      NzTableModule
  ],
  templateUrl: './posts.component.html',
  providers: [NzModalService]
})
export class PostsComponent implements OnInit {
   private postService = inject(PostService);
   private nzModalService = inject(NzModalService);

   postData!: Post[];

   ngOnInit(){
    this.postService.getPosts().subscribe(res=>{
      this.postData = res;
    })
   }

  seeDetails(data: Post) {
    this.nzModalService.create({
      nzContent: PostDetailsComponent,
      nzData: data,
    })
  }
}
