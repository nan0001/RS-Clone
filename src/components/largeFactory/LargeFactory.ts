import Factory from '../../common/components/factory/Factory';
import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import store from '../../common/components/store/store';
import { FACTORIES, FACTORY_TYPES } from '../../common/helpers/constants';
import { FactoryDesc, FactoryTitle } from '../../common/helpers/types';
import './largeFactory.scss';

class LargeFactory extends Factory {
  public initProduction: number;
  public initUpgradePrice: number;
  protected title: FactoryTitle;
  protected description: FactoryDesc;

  static timer: ReturnType<typeof setInterval> | undefined = undefined;

  constructor() {
    super(
      FACTORIES.large.production,
      FACTORIES.large.price,
      FACTORIES.large.upgradePrice,
    );
    this.initProduction = FACTORIES.large.production;
    this.initUpgradePrice = FACTORIES.large.upgradePrice;
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

  product(): void {
    LargeFactory.timer = setInterval(() => {
      store.dispatch(increaseCookiesCount(this.cookieProduction));
    }, 1000);
  }

  stopProduction(): void {
    clearInterval(LargeFactory.timer);
  }
}

export default LargeFactory;
