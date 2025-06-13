import {Component} from '@angular/core';
import {NzCardComponent, NzCardGridDirective} from 'ng-zorro-antd/card';
import {RouterLink} from '@angular/router';
import {NgStyle} from '@angular/common';
import {RouteModel} from '../shared/route.model';

@Component({
  selector: 'app-data-lists',
  imports: [
    NzCardComponent,
    RouterLink,
    NzCardGridDirective,
    NgStyle
  ],
  templateUrl: './data-lists.component.html',
})
export class DataListsComponent {
  gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

  routes: RouteModel[] = [
    { path: 'users', title: 'მომხმარებლები' },
    { path: 'posts', title: 'პოსტები' },
  ];
}
