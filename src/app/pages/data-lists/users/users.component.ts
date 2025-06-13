import {Component, inject, OnInit} from '@angular/core';
import {NzTableModule} from 'ng-zorro-antd/table';
import {UsersService} from './services/users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NzTableModule,
    FormsModule,
    FilterPipe,
  ],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
  #usersService = inject(UsersService);
  private router =  inject(Router);
  private route = inject(ActivatedRoute);

  usersData: any;
  filteredUsers: any;
  searchTerm: any;

  ngOnInit() {
    this.#usersService.getUsers().subscribe(res => {
      this.usersData = res;
      this.filteredUsers = res;
    })
  }

  onPosts(id: string) {
    this.router.navigate(['post', id], {relativeTo:  this.route });
  }

  onTodo(id: string){
    this.router.navigate(['todos', id], {relativeTo:  this.route });
  }

}
