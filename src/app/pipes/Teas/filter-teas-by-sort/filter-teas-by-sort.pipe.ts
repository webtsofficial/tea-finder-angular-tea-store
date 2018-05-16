import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';
import {TeaSort} from '../../../models/Tea/TeaSort';

@Pipe({
  name: 'filterTeasBySort'
})
export class FilterTeasBySortPipe implements PipeTransform {

  transform(teas: Tea[], sort: TeaSort): Tea[] {
    return teas.filter(tea => tea.sort === sort);
  }

}
