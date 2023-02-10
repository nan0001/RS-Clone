import Factory from '../../common/components/factory/Factory';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './smallFactory.scss';

class SmallFactory extends Factory {
  public initProduction: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  constructor() {
    super(FACTORIES.small.production);
    this.initProduction = FACTORIES.small.production;
    this.title = FACTORIES.small.title;
    this.description = FACTORIES.small.description;
  }

  draw(): HTMLElement {
    const factory = super.draw(this.title, this.description, FACTORY_TYPES.s);

    return factory;
  }

  drawForCatalogue(): HTMLElement {
    const factory = super.draw(
      this.title,
      this.description,
      FACTORY_TYPES.s,
      true,
    );

    return factory;
  }
}

export default SmallFactory;
