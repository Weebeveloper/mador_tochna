interface IDataCardModelProperties {
  readonly id: number;
  readonly name: string;
  readonly description: string;
}

export class DataCardModel implements IDataCardModelProperties {
  readonly id!: number;
  readonly name!: string;
  readonly description!: string;

  constructor(private readonly properties: IDataCardModelProperties) {
    Object.assign(this, properties);
  }
}
