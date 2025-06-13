import {Routes} from '@angular/router';

export const Data_Lists_Routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./users/users.component').then((c) => c.UsersComponent),
    data: {
      breadcrumb: 'მომხმარებლები',
    },
    title: 'მომხმარებლები',

  },
  {
    path: 'users/post/:id',
    loadComponent: () =>
      import('./users/components/user-post/user-post.component').then((c) => c.UserPostComponent),
    data: {
      breadcrumb: 'პოსტები',
    },
    title: 'პოსტები',
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./posts/posts.component').then((c) => c.PostsComponent),
    data: {
      breadcrumb: 'პოსტები',
    },
    title: 'პოსტები',
  },

  {
    path: 'users/todos/:id',
    loadComponent: () =>
      import('./users/components/user-todo/user-todo.component').then((c) => c.UserTodoComponent ),    data: {
      breadcrumb: 'შესასრულებელი დავალებები',
    },
    title: 'Todo',
  },

]
