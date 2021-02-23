import { Moment } from 'moment';
import { ICourierCompany } from 'app/shared/model/courier-company.model';
import { IOrder } from 'app/shared/model/order.model';

export interface ICourier {
  id?: number;
  name?: string;
  phoneNumber?: string;
  photoUrl?: string;
  telegramChatId?: number;
  joinDate?: Moment;
  company?: ICourierCompany;
  orders?: IOrder;
}

export class Courier implements ICourier {
  constructor(
    public id?: number,
    public name?: string,
    public phoneNumber?: string,
    public photoUrl?: string,
    public telegramChatId?: number,
    public joinDate?: Moment,
    public company?: ICourierCompany,
    public orders?: IOrder
  ) {}
}
