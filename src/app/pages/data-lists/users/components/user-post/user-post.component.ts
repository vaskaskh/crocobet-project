import {Component, inject, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../../services/users.service';
import {AsyncPipe} from '@angular/common';
import {NzCardComponent} from 'ng-zorro-antd/card';

@Component({
  selector: 'app-user-post',
  imports: [
    AsyncPipe,
    NzCardComponent,
  ],
  templateUrl: './user-post.component.html',
})
export class UserPostComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  id = signal(this.route.snapshot.params['id']);

  userPosts = this.usersService.getUserPost(this.id())

}
