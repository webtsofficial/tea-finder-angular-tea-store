import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';

@Pipe({
  name: 'filterTeasByName'
})
export class FilterTeasByNamePipe implements PipeTransform {

  transform(teas: Tea[], name: string): Tea[] {
    return teas.filter(tea => tea.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
  }

}
