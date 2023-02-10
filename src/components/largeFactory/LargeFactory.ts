import Factory from '../../common/components/factory/Factory';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './largeFactory.scss';

class LargeFactory extends Factory {
  public initProduction: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  constructor() {
    super(FACTORIES.large.production);
    this.initProduction = FACTORIES.large.production;
    this.title = FACTORIES.large.title;
    this.description = FACTORIES.large.description;
  }

  draw(): HTMLElement {
    const factory = super.draw(this.title, this.description, FACTORY_TYPES.l);

    return factory;
  }

  drawForCatalogue(): HTMLElement {
    const factory = super.draw(
      this.title,
      this.description,
      FACTORY_TYPES.l,
      true,
    );

    return factory;
  }
}

export default LargeFactory;
