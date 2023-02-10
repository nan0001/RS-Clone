import Factory from '../../common/components/factory/Factory';
import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import store from '../../common/components/store/store';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './smallFactory.scss';

class SmallFactory extends Factory {
  public initProduction: number;
  public initUpgradePrice: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  static timer: ReturnType<typeof setInterval> | undefined = undefined;

  constructor() {
    super(
      FACTORIES.small.production,
      FACTORIES.small.price,
      FACTORIES.small.upgradePrice,
    );
    this.initProduction = FACTORIES.small.production;
    this.initUpgradePrice = FACTORIES.small.upgradePrice;
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

  product(): void {
    SmallFactory.timer = setInterval(() => {
      store.dispatch(increaseCookiesCount(this.cookieProduction));
    }, 1000);
  }

  stopProduction(): void {
    clearInterval(SmallFactory.timer);
  }
}

export default SmallFactory;
