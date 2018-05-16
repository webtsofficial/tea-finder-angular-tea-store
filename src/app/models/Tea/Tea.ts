import {TeaSort} from './TeaSort';
import {TeaGrowingRegion} from './TeaGrowingRegion';
import {TeaImage} from './TeaImage';
import {TeaCharacteristic} from './TeaCharacteristic';
import {TeaAroma} from './TeaAroma';
import {TeaTaste} from './TeaTaste';

export class Tea {
    id: number;
    name: string;
    price: number;
    offer: boolean;
    offerPrice: number;
    storageAmount: number;
    mainTeaImageId: number;
    images: TeaImage[];
    description: string;
    sort: TeaSort;
    characteristics: TeaCharacteristic[];
    aromas: TeaAroma[];
    tastes: TeaTaste[];
    growingRegion: TeaGrowingRegion;
    created: string;
    updated: string;
    updateAdminId: number;
}
