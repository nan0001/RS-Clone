import { increaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import store from '../../common/components/store/store';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './factory.scss';

class Factory {
  protected cookieProduction: number;
  protected maxLevel: number;
  protected currentLevel: number;
  protected upgradeMultiplier: number;
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

  draw(title: string, desc: string): HTMLElement {
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

    factoryTitle.innerText = title;
    description.innerText = desc;
    upgradeText.innerText += `${
      this.cookieProduction * this.upgradeMultiplier
    } cookies`;
    factoryProduction.innerText = `${this.cookieProduction}`;

    upgradeBtn.addEventListener('click', () => {
      this.upgrade();

      if (this.currentLevel === this.maxLevel) {
        upgradeBtn.setAttribute('disabled', '');
        upgradeText.innerText = 'Max upgrade level reached';
      } else {
        upgradeText.innerText =
          CONSTANTS.upgradeText.text +
          `${Math.round(
            this.cookieProduction * this.upgradeMultiplier,
          )} cookies`;
      }

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
