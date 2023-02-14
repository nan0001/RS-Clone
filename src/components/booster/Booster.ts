import { BOOSTERS } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './booster.scss';
import FallingItem from '../fallingItems/FallingItems';
import { activateTimer, getText, updateDescription } from './helper';
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
    const description = createElement(CONSTANTS.description);
    const infoWrapper = createElement(CONSTANTS.infoWrapper);
    const boosterWrapper = createElement(CONSTANTS.boosterWrapper);
    const count = createElement(CONSTANTS.count);
    const addBtn = createElement(CONSTANTS.addBtn);
    const info = createElement(CONSTANTS.generalInfo);

    if (item) {
      const name = item.name as keyof FallingItem;
      const itemOnActive: <T>(property?: T) => void = FallingItem[name];

      image.setAttribute('src', item.img);
      count.textContent = String(store.getState().boosters[name]);
      addBtn.textContent = getText('addBtn');

      store.subscribe(() => {
        const state = store.getState();
        count.innerText = state.boosters[name];
        addBtn.textContent = getText('addBtn');
      });

      booster.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('boosters-item__image')) {
          if (item.timer === false) {
            return;
          }
          if (store.getState().boosters[name] == 0) {
            description.textContent = getText('buyInfo');
            description.style.color = '#22475b';
            description.style.backgroundColor = '#cfe7fa';
            description.classList.add('boosters-item__description_active');
            return;
          }
          target.addEventListener('mouseout', () => {
            description.classList.remove('boosters-item__description_active');
          });
          item.property ? itemOnActive(item.property) : itemOnActive();

          if (item.timer) {
            timer.classList.add('boosters-item__timer_active');
            activateTimer(timer, itemOnActive, id);
          }
          store.dispatch(decreaseBoostersCount(item.name));
        }

        if (target.classList.contains('boosters-item__info-buy')) {
          if (store.getState().cookies.count >= item.cost) {
            playActionSound(sound);
            store.dispatch(decreaseCookiesCount(item.cost));
            store.dispatch(increaseBoostersCount(item.name));
            updateDescription(description, item.cost);
          }
        }
      });

      booster.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;

        if (target.classList.contains('boosters-item__info-general')) {
          description.textContent = getText(item.name);
          description.style.color = 'white';
          description.style.backgroundColor = `rgba(27, 143, 185, 0.7)`;
          description.classList.add('boosters-item__description_active');
        }

        if (target.classList.contains('boosters-item__info-buy')) {
          updateDescription(description, item.cost);
          description.classList.add('boosters-item__description_active');
        }

        target.addEventListener('mouseout', () => {
          description.classList.remove('boosters-item__description_active');
        });
      });
    }
    infoWrapper.append(info, addBtn);
    boosterWrapper.append(description, image, timer, count);
    booster.append(infoWrapper, boosterWrapper);

    return booster;
  }
}

export default Booster;
