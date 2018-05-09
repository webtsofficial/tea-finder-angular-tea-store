import {EquipmentImage} from './EquipmentImage';
import {EquipmentUse} from './EquipmentUse';

export class Equipment {
    id:                         number;
    name:                       string;
    description:                string;
    brand:                      string;
    price:                      number;
    offer:                      boolean;
    'offer-price':              string;
    'storage-amount':           number;
    'equipment-main-image-id':  number;
    images:                     EquipmentImage[];
    uses:                       EquipmentUse[];
    'create-time':              string;
    'update-time':              string;
    'update-admin-id':          number;
}