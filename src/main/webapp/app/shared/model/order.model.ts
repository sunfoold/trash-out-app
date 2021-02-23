import { Moment } from 'moment';
import { IGarbage } from 'app/shared/model/garbage.model';
import { IUser } from 'app/core/user/user.model';
import { ICourier } from 'app/shared/model/courier.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IOrder {
  id?: number;
  orderDate?: Moment;
  price?: number;
  finishDate?: Moment;
  userPhotoUrl?: string;
  courierPhotoUrl?: string;
  endOrderPhotoUrl?: string;
  orderStartDate?: Moment;
  orderFinishDate?: Moment;
  orderStatus?: OrderStatus;
  courierRatio?: number;
  userRatio?: number;
  garbage?: IGarbage;
  users?: IUser[];
  couriers?: ICourier[];
}

export class Order implements IOrder {
  constructor(
    public id?: number,
    public orderDate?: Moment,
    public price?: number,
    public finishDate?: Moment,
    public userPhotoUrl?: string,
    public courierPhotoUrl?: string,
    public endOrderPhotoUrl?: string,
    public orderStartDate?: Moment,
    public orderFinishDate?: Moment,
    public orderStatus?: OrderStatus,
    public courierRatio?: number,
    public userRatio?: number,
    public garbage?: IGarbage,
    public users?: IUser[],
    public couriers?: ICourier[]
  ) {}
}
