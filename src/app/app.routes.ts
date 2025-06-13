import {Routes} from '@angular/router';
import {NotFoundComponent} from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: 'main',
        loadComponent: () =>
          import('./pages/main/main.component').then((c) => c.MainComponent),
        data: {
          preload: true,
          breadcrumb: 'მთავარი გვერდი',
        },
        title: 'მთავარი გვერდი',
      },
      {
        path: 'data-lists',
        loadChildren: () =>
          import('./pages/data-lists/data-lists.routes').then((r) => r.Data_Lists_Routes),
        data: {
          preload: true,
        },
        title: 'სიები',
      },
    ],

  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404',
  },


]
