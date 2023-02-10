import Factory from '../../common/components/factory/Factory';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './mediumFactory.scss';

class MediumFactory extends Factory {
  public initProduction: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  constructor() {
    super(FACTORIES.medium.production);
    this.initProduction = FACTORIES.medium.production;
    this.title = FACTORIES.medium.title;
    this.description = FACTORIES.medium.description;
  }

  draw(): HTMLElement {
    const factory = super.draw(this.title, this.description, FACTORY_TYPES.m);

    return factory;
  }

  drawForCatalogue(): HTMLElement {
    const factory = super.draw(
      this.title,
      this.description,
      FACTORY_TYPES.m,
      true,
    );

    return factory;
  }
}

export default MediumFactory;
