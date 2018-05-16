import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';
import {TeaCharacteristic} from '../../../models/Tea/TeaCharacteristic';

@Pipe({
  name: 'filterTeasByCharacteristics'
})
export class FilterTeasByCharacteristicsPipe implements PipeTransform {

  transform(teas: Tea[], characteristicsArr: TeaCharacteristic[]): Tea[] {
    if (characteristicsArr.constructor === Array) {
        return teas.filter((tea) => {
          return characteristicsArr.some(characteristic => tea.characteristics.includes(characteristic));
        });
    }
  }

}
