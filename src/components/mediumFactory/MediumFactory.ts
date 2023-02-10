import Factory from '../../common/components/factory/Factory';
import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import store from '../../common/components/store/store';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './mediumFactory.scss';

class MediumFactory extends Factory {
  public initProduction: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  static timer: ReturnType<typeof setInterval> | undefined = undefined;

  constructor() {
    super(
      FACTORIES.medium.production,
      FACTORIES.medium.price,
      FACTORIES.medium.upgradePrice,
    );
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

  product(): void {
    MediumFactory.timer = setInterval(() => {
      store.dispatch(increaseCookiesCount(this.cookieProduction));
    }, 1000);
  }

  stopProduction(): void {
    clearInterval(MediumFactory.timer);
  }
}

export default MediumFactory;
