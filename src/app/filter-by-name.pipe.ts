import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(items: {name:string}[], searchTerm: string):{name: string}[] {
    if (!items)return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLocaleLowerCase();

    return items.filter(item => item.name.toLocaleLowerCase().includes(searchTerm));
  }

}
