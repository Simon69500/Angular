import { Pipe, type PipeTransform } from '@angular/core';
import { Figurine } from './figurine.model';

@Pipe({
  name: 'appSortByPrice',
  standalone: true,
})
export class SortByPricePipe implements PipeTransform {

  transform(items: Figurine[], order: 'asc' | 'desc'): Figurine[] {
    if (!items || !order){
      return items;
    }
    return items.sort((a, b) => {
      const priceA = parseFloat(a.prix.replace('€','').replace(',',','));
      const priceB = parseFloat(b.prix.replace('€','').replace(',',''));
      return order === 'asc'? priceA - priceB : priceB - priceA;
    });
  }

}
