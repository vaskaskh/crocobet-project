import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchTerm?: string): any[] {
    if (!value || !Array.isArray(value)) return [];

    const search = (searchTerm || '').trim().toLowerCase();
    if (!search) return value;

    return value.filter(item => {
      const name = (item.name || '').toLowerCase();
      const username = (item.username || '').toLowerCase();
      const email = (item.email || '').toLowerCase();

      return name.includes(search) || username.includes(search) || email.includes(search);
    });
  }
}
