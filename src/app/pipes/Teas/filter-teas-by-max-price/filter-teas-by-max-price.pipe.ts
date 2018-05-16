import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';

@Pipe({
  name: 'filterTeasByMaxPrice'
})
export class FilterTeasByMaxPricePipe implements PipeTransform {

  transform(teas: Tea[], maxPrice: number): Tea[] {
    return teas.filter(tea => tea.price <= maxPrice);
  }

}
