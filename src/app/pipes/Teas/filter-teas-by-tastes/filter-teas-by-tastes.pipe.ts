import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';
import {TeaTaste} from '../../../models/Tea/TeaTaste';

@Pipe({
  name: 'filterTeasByTastes'
})
export class FilterTeasByTastesPipe implements PipeTransform {

  transform(teas: Tea[], tastesArr: TeaTaste[]): Tea[] {
    return teas.filter((tea) => {
      return tastesArr.some(taste => tea.tastes.includes(taste));
    });
  }

}
