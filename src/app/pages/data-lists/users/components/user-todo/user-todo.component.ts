import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { AsyncPipe } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';

@Component({
  selector: 'app-user-todo',
  standalone: true,
  imports: [
    AsyncPipe,
    NzCardModule,
    NzTagModule
  ],
  templateUrl: './user-todo.component.html',
})
export class UserTodoComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  id = signal(this.route.snapshot.params['id']);
  userTodos = this.usersService.getUserTodo(this.id());
}
