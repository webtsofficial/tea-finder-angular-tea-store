import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';
import {TeaAroma} from '../../../models/Tea/TeaAroma';

@Pipe({
  name: 'filterTeasByAromas'
})
export class FilterTeasByAromasPipe implements PipeTransform {

  transform(teas: Tea[], aromasArr: TeaAroma[]): Tea[] {
    return teas.filter((tea) => {
      return aromasArr.some(aroma => tea.aromas.includes(aroma));
    });
  }

}
