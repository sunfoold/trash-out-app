export interface IAppUser {
  id?: number;
  name?: string;
  phoneNumber?: string;
  email?: string;
  telegramChatId?: number;
  balance?: number;
  promoCode?: string;
}

export class AppUser implements IAppUser {
  constructor(
    public id?: number,
    public name?: string,
    public phoneNumber?: string,
    public email?: string,
    public telegramChatId?: number,
    public balance?: number,
    public promoCode?: string
  ) {}
}
