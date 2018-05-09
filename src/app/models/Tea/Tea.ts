import {TeaSort} from './TeaSort';
import {TeaGrowingRegion} from './TeaGrowingRegion';
import {TeaImage} from './TeaImage';
import {TeaCharacteristic} from './TeaCharacteristic';
import {TeaAroma} from './TeaAroma';
import {TeaTaste} from './TeaTaste';

export class Tea {
    id:                     number;
    name:                   string;
    price:                  number;
    offer:                  boolean;
    'offer-price':          number;
    'storage-amount':       number;
    'main-tea-image-id':    number;
    images:                 TeaImage[];
    description:            string;
    sort:                   TeaSort;
    characteristics:        TeaCharacteristic[];
    aromas:                 TeaAroma[];
    tastes:                 TeaTaste[];
    'growing-region':       TeaGrowingRegion;
    'create-time':          string;
    'update-time':          string;
    'update-admin-id':      number;
}
