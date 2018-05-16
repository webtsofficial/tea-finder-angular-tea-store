import {EquipmentImage} from './EquipmentImage';
import {EquipmentUse} from './EquipmentUse';

export class Equipment {
    id:                         number;
    name:                       string;
    description:                string;
    brand:                      string;
    price:                      number;
    offer:                      boolean;
    offerPrice:                 string;
    storageAmount:              number;
    equipmentMainImageId:       number;
    images:                     EquipmentImage[];
    uses:                       EquipmentUse[];
    created:                    string;
    updated:                    string;
    updateAdminId:              number;

    constructor(equipmentObjDb, images: EquipmentImage[], uses: EquipmentUse[]) {
        this.id = equipmentObjDb.id;
        this.name = equipmentObjDb.name;
        this.description = equipmentObjDb.description;
        this.brand = equipmentObjDb.brand;
        this.price = equipmentObjDb['offer-price'];
        this.offer = equipmentObjDb.offer;
        this.offerPrice = equipmentObjDb['offer-price'];
        this.storageAmount = equipmentObjDb['storage-amount'];
        this.equipmentMainImageId = equipmentObjDb['main-image-id'];
        this.images = images;
        this.uses = uses;
        this.created = equipmentObjDb.created;
        this.updated = equipmentObjDb.updated;
        this.updateAdminId = equipmentObjDb['update-admin-id'];
    }
}
