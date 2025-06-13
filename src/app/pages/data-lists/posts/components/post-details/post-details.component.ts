import {Component, inject, OnInit} from '@angular/core';
import {NZ_MODAL_DATA} from 'ng-zorro-antd/modal';
import {Post} from '../../models/post.model';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
})
export class PostDetailsComponent implements OnInit {
  isVisible = true;

  postData!: Post;

  private nzData = inject<Post>(NZ_MODAL_DATA);

  ngOnInit() {
    this.postData = this.nzData;
  }

}
