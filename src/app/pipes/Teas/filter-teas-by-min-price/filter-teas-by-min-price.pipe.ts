import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';

@Pipe({
  name: 'filterTeasByMinPrice'
})
export class FilterTeasByMinPricePipe implements PipeTransform {

  transform(teas: Tea[], minPrice: number): Tea[] {
    return teas.filter(tea => tea.price >= minPrice);
  }

}
