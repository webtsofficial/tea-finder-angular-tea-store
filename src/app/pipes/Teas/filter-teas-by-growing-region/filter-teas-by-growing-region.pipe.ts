import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';
import {TeaGrowingRegion} from '../../../models/Tea/TeaGrowingRegion';

@Pipe({
  name: 'filterTeasByGrowingRegion'
})
export class FilterTeasByGrowingRegionPipe implements PipeTransform {

  transform(teas: Tea[], growingRegion: TeaGrowingRegion): Tea[] {
    return teas.filter(tea => tea.growingRegion === growingRegion);
  }

}
