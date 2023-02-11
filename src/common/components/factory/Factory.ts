import {
  increaseCookiesCount,
  decreaseCookiesCount,
} from '../store/reducers/cookiesCount';
import store from '../store/store';
import createElement from '../../helpers/createElement';
import { CONSTANTS } from './constants';
import './factory.scss';
import { checkBuyBtn, insertElemsText, upgradeBtnHandler } from './helpers';
import { FactoryDesc, FactoryTitle } from '../../helpers/types';
import {
  buyFactory,
  saveFactory,
  upgradeFactory,
} from '../store/reducers/factories';
import RemoveConfirmationPopup from '../../../components/removeConfirmationPopup/RemoveConfirmationPopup';

class Factory {
  public cookieProduction: number;
  public maxLevel: number;
  public currentLevel: number;
  public upgradeMultiplier: number;
  public price: number;
  public upgradePrice: number;
  static timer: ReturnType<typeof setInterval> | undefined = undefined;

  constructor(cookieProduction: number, price: number, upgradePrice: number) {
    this.cookieProduction = cookieProduction;
    this.maxLevel = 10;
    this.currentLevel = 1;
    this.upgradeMultiplier = 1.2;
    this.price = price;
    this.upgradePrice = upgradePrice;
  }

  product(): void {
    Factory.timer = setInterval(() => {
      store.dispatch(increaseCookiesCount(this.cookieProduction));
    }, 1000);
  }

  stopProduction(): void {
    clearInterval(Factory.timer);
  }

  upgrade(): void {
    if (this.currentLevel < this.maxLevel) {
      this.currentLevel += 1;
      this.cookieProduction = Math.round(
        this.cookieProduction * this.upgradeMultiplier,
      );
      this.upgradePrice = Math.round(
        this.upgradePrice * this.upgradeMultiplier,
      );
    }
  }

  draw(
    title: FactoryTitle,
    desc: FactoryDesc,
    classToAdd: string,
    isForCatalogue = false,
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
    const buyBtn = createElement(CONSTANTS.buyBtn);
    const factoryPriceCont = createElement(CONSTANTS.factoryPriceCont);
    const factoryCurrency = createElement(CONSTANTS.factoryCurrency);
    const factoryPrice = createElement(CONSTANTS.factoryPrice);
    const elemsChangingLang = {
      factoryTitle,
      description,
      upgradeText,
      buyBtn,
    };

    factory.classList.add(CONSTANTS.additionalFactoryClass(classToAdd));
    factoryProduction.innerText = `${this.cookieProduction}`;
    factoryPrice.innerText = `${this.price}`;

    if (this.currentLevel === this.maxLevel) {
      upgradeBtn.setAttribute('disabled', '');
    }

    if (store.getState().cookies.count < this.upgradePrice) {
      upgradeBtn.setAttribute('disabled', '');
    } else if (this.currentLevel !== this.maxLevel) {
      upgradeBtn.removeAttribute('disabled');
    }

    insertElemsText(
      store.getState(),
      elemsChangingLang,
      title,
      desc,
      this.currentLevel === this.maxLevel
        ? undefined
        : Math.round(this.cookieProduction * this.upgradeMultiplier),
      this.upgradePrice,
    );

    store.subscribe(() => {
      insertElemsText(
        store.getState(),
        elemsChangingLang,
        title,
        desc,
        this.currentLevel === this.maxLevel
          ? undefined
          : Math.round(this.cookieProduction * this.upgradeMultiplier),
        this.upgradePrice,
      );

      if (store.getState().cookies.count < this.upgradePrice) {
        upgradeBtn.setAttribute('disabled', '');
      } else if (this.currentLevel !== this.maxLevel) {
        upgradeBtn.removeAttribute('disabled');
      }

      checkBuyBtn(buyBtn, classToAdd, this.price);
    });

    upgradeBtn.addEventListener('click', () => {
      upgradeBtnHandler(this, upgradeBtn, upgradeText, this.upgradePrice);
      factoryProduction.innerText = `${this.cookieProduction}`;
      store.dispatch(upgradeFactory(classToAdd));
      store.dispatch(decreaseCookiesCount(this.upgradePrice));
    });

    buyBtn.addEventListener('click', () => {
      store.dispatch(buyFactory(classToAdd));
      store.dispatch(saveFactory(this));
      store.dispatch(decreaseCookiesCount(this.price));
      this.product();
    });

    removebtn.addEventListener('click', () => {
      document.body.append(
        ...new RemoveConfirmationPopup(factory, this, classToAdd).draw(),
      );
    });

    if (isForCatalogue) {
      checkBuyBtn(buyBtn, classToAdd, this.price);
      factory.classList.add(CONSTANTS.classForCatalogue);

      factoryPriceCont.append(factoryCurrency, factoryPrice);
      factory.append(factoryTitle, img, description, factoryPriceCont, buyBtn);
    } else {
      textContainer.append(factoryTitle, description, upgradeText);
      btnsContainer.append(factoryProduction, removebtn, upgradeBtn);
      factory.append(img, textContainer, btnsContainer);
    }

    return factory;
  }
}

export default Factory;
