import { BOOSTERS } from '../../common/helpers/constants';
import createElement from '../../common/helpers/createElement';
import { CONSTANTS } from './constants';
import './booster.scss';
import FallingItem from '../fallingItems/FallingItems';
import { activateTimer } from './helper';

class Booster {
  static draw(id: number) {
    const item = BOOSTERS.find((item) => item.id === id);
    const booster = createElement(CONSTANTS.booster);
    const image = createElement(CONSTANTS.image);
    const timer = createElement(CONSTANTS.timer);

    if (item) {
      image.setAttribute('src', item.img);
      const name = item.name as keyof FallingItem;
      const itemOnActive: <T>(property?: T) => void = FallingItem[name];
      booster.addEventListener('click', () => {
        if (item.timer === false) return;
        item.property ? itemOnActive(item.property) : itemOnActive();

        if (item.timer) {
          timer.classList.add('game-boosters__item-timer_active');
          activateTimer(timer, itemOnActive, id);
        }
      });
    }

    booster.append(image, timer);

    return booster;
  }
}

export default Booster;
