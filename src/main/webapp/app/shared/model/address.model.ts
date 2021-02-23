export interface IAddress {
  id?: number;
  city?: string;
  streetBuilding?: string;
  level?: number;
  apartment?: string;
  latitude?: string;
  longitude?: string;
}

export class Address implements IAddress {
  constructor(
    public id?: number,
    public city?: string,
    public streetBuilding?: string,
    public level?: number,
    public apartment?: string,
    public latitude?: string,
    public longitude?: string
  ) {}
}
