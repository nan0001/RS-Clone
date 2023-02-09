import Factory from '../../common/components/factory/Factory';
import { FACTORY_TYPES } from '../../common/helpers/constants';
import { CONSTANTS } from './constants';
import './smallFactory.scss';

class SmallFactory extends Factory {
  protected title: { titleEN: string; titleRU: string };
  protected description: { descriptionEN: string; descriptionRU: string };

  constructor() {
    super(CONSTANTS.cookieProduction);
    this.title = CONSTANTS.title;
    this.description = CONSTANTS.description;
  }

  draw(): HTMLElement {
    const factory = super.draw(this.title, this.description, FACTORY_TYPES.s);

    return factory;
  }
}

export default SmallFactory;
