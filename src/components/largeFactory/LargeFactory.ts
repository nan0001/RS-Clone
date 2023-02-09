import Factory from '../../common/components/factory/Factory';
import { FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import { CONSTANTS } from './constants';
import './largeFactory.scss';

class LargeFactory extends Factory {
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  constructor() {
    super(CONSTANTS.cookieProduction);
    this.title = CONSTANTS.title;
    this.description = CONSTANTS.description;
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
