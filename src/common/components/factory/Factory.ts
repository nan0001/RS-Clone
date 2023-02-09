import { increaseCookiesCount } from '../store/reducers/cookiesCount';
import store, { RootState } from '../store/store';
import createElement from '../../helpers/createElement';
import { CONSTANTS } from './constants';
import './factory.scss';
import { changeLangFactory, upgradeBtnHandler } from './helpers';
import { FactoryDesc, FactoryTitle } from '../../helpers/types';

class Factory {
  public cookieProduction: number;
  public maxLevel: number;
  public currentLevel: number;
  public upgradeMultiplier: number;
  protected timer: ReturnType<typeof setInterval> | undefined;

  constructor(cookieProduction: number) {
    this.cookieProduction = cookieProduction;
    this.maxLevel = 10;
    this.currentLevel = 1;
    this.upgradeMultiplier = 1.2;
    this.timer = undefined;
  }

  product(): void {
    this.timer = setInterval(() => {
      store.dispatch(increaseCookiesCount(this.cookieProduction));
    }, 1000);
  }

  stopProduction(): void {
    clearInterval(this.timer);
  }

  upgrade(): void {
    if (this.currentLevel < this.maxLevel) {
      this.currentLevel += 1;
      this.cookieProduction = Math.round(
        this.cookieProduction * this.upgradeMultiplier,
      );
    }
  }

  draw(
    title: FactoryTitle,
    desc: FactoryDesc,
    classToAdd: string,
  ): HTMLElement {
    const factory = createElement(CONSTANTS.factory);
    const img = createElement(CONSTANTS.factoryImg);
    const textContainer = createElement(CONSTANTS.factoryTextContainer);
    const factoryTitle = createElement(CONSTANTS.factoryTitle);
    const description = createElement(CONSTANTS.description);
    const upgradeText = createElement(CONSTANTS.upgradeText);
    const btnsContainer = createElement(CONSTANTS.btnsContainer);
    const factoryProduction = createElement(CONSTANTS.factoryProduction);
    const upgradeBtn = createElement(CONSTANTS.factoryUpgradeBtn);
    const removebtn = createElement(CONSTANTS.factoryRemoveBtn);
    const elemsChangingLang = { factoryTitle, description, upgradeText };

    factory.classList.add(CONSTANTS.additionalFactoryClass(classToAdd));
    factoryProduction.innerText = `${this.cookieProduction}`;

    changeLangFactory(
      store.getState(),
      elemsChangingLang,
      title,
      desc,
      this.currentLevel === this.maxLevel
        ? undefined
        : Math.round(this.cookieProduction * this.upgradeMultiplier),
    );

    store.subscribe(() => {
      const state: RootState = store.getState();

      changeLangFactory(
        state,
        elemsChangingLang,
        title,
        desc,
        this.currentLevel === this.maxLevel
          ? undefined
          : Math.round(this.cookieProduction * this.upgradeMultiplier),
      );
    });

    upgradeBtn.addEventListener('click', () => {
      upgradeBtnHandler(this, upgradeBtn, upgradeText);
      factoryProduction.innerText = `${this.cookieProduction}`;
    });

    removebtn.addEventListener('click', () => {
      this.stopProduction();
      factory.remove();
    });

    textContainer.append(factoryTitle, description, upgradeText);
    btnsContainer.append(factoryProduction, removebtn, upgradeBtn);
    factory.append(img, textContainer, btnsContainer);

    return factory;
  }
}

export default Factory;
