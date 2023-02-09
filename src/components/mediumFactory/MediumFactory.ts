import Factory from '../../common/components/factory/Factory';
import { FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import { CONSTANTS } from './constants';
import './mediumFactory.scss';

class MediumFactory extends Factory {
  public initProduction: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  constructor() {
    super(CONSTANTS.cookieProduction);
    this.initProduction = CONSTANTS.cookieProduction;
    this.title = CONSTANTS.title;
    this.description = CONSTANTS.description;
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
