import {Component} from '@angular/core';
import {NzContentComponent, NzHeaderComponent, NzLayoutComponent, NzSiderComponent} from 'ng-zorro-antd/layout';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DatePipe} from '@angular/common';
import {NzIconDirective} from 'ng-zorro-antd/icon';
import {NzMenuDirective, NzMenuItemComponent} from 'ng-zorro-antd/menu';
import {NzBreadCrumbComponent} from 'ng-zorro-antd/breadcrumb';
import {FormsModule} from '@angular/forms';
import {RouteModel} from '../shared/route.model';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NzLayoutComponent,
    NzSiderComponent,
    NzMenuItemComponent,
    NzHeaderComponent,
    NzBreadCrumbComponent,
    NzContentComponent,
    FormsModule,
    NzIconDirective,
    NzMenuDirective,
    RouterLink,
    RouterOutlet,
    DatePipe,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  isCollapsed = true;
  myDate = new Date();

  dataListsRoutes: RouteModel[] = [
    { path: 'data-lists/users', title: 'მომხმარებლები' },
    { path: 'data-lists/posts', title: 'პოსტები'},
  ];

  constructor() {
    setInterval(() => {
      this.myDate = new Date();
    }, 1000);
  }

}
