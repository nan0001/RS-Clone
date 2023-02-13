import { BOOSTERS } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './booster.scss';
import FallingItem from '../fallingItems/FallingItems';
import { activateTimer } from './helper';
import store from '../../common/components/store/store';
import {
  decreaseBoostersCount,
  increaseBoostersCount,
} from '../../common/components/store/reducers/boostersCount';
import { decreaseCookiesCount } from '../../common/components/store/reducers/cookiesCount';
import sound from '../../common/assets/sounds/spend-money.mp3';
import { playActionSound } from '../../common/helpers/playActionSound';

class Booster {
  static draw(id: number) {
    const item = BOOSTERS.find((item) => item.id === id);
    const booster = createElement(CONSTANTS.booster);
    const image = createElement(CONSTANTS.image);
    const timer = createElement(CONSTANTS.timer);
    const count = createElement(CONSTANTS.count);
    const buyInfo = createElement(CONSTANTS.buyInfo);

    count.addEventListener('mouseover', () => {
      buyInfo.classList.add('game-boosters__item-buy_hovered');
    });
    count.addEventListener('mouseout', () => {
      buyInfo.classList.remove('game-boosters__item-buy_hovered');
    });

    if (item) {
      buyInfo.textContent = item.cost.toString();
      image.setAttribute('src', item.img);
      const name = item.name as keyof FallingItem;
      count.textContent = String(store.getState().boosters[name]);
      store.subscribe(() => {
        const state = store.getState();
        count.innerText = state.boosters[name];
      });
      const itemOnActive: <T>(property?: T) => void = FallingItem[name];
      booster.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('game-boosters__item-image')) {
          if (item.timer === false || store.getState().boosters[name] == 0)
            return;
          item.property ? itemOnActive(item.property) : itemOnActive();

          if (item.timer) {
            timer.classList.add('game-boosters__item-timer_active');
            activateTimer(timer, itemOnActive, id);
          }
          store.dispatch(decreaseBoostersCount(item.name));
        }

        if (target.classList.contains('game-boosters__item-count')) {
          if (store.getState().cookies.count >= item.cost) {
            playActionSound(sound);
            store.dispatch(decreaseCookiesCount(item.cost));
            store.dispatch(increaseBoostersCount(item.name));
          }
        }
      });
    }

    booster.append(count, buyInfo, image, timer);

    return booster;
  }
}

export default Booster;
