import { Pipe, PipeTransform } from '@angular/core';
import {Tea} from '../../../models/Tea/Tea';

@Pipe({
  name: 'filterOfferTeas'
})
export class FilterOfferTeasPipe implements PipeTransform {

  // offerBool defines if all offer or non-offer teas should be shown
  transform(teas: Tea[], offerBool: boolean = true): Tea[] {
    return teas.filter(tea => tea.offer === offerBool);
  }

}
