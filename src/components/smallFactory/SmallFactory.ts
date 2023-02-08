import Factory from '../../common/components/factory/Factory';
import { CONSTANTS } from './constants';
import './smallFactory.scss';

class SmallFactory extends Factory {
  protected title: string;
  protected description: string;

  constructor() {
    super(CONSTANTS.cookieProduction);
    this.title = CONSTANTS.title;
    this.description = CONSTANTS.description;
  }

  draw(): HTMLElement {
    const factory = super.draw(this.title, this.description);

    return factory;
  }
}

export default SmallFactory;
