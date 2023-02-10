import FallingItem from '../fallingItems/FallingItems';
import { BOOSTERS } from '../../common/helpers/constants';

export const activateTimer = (
  timer: HTMLElement,
  func: (state?: number | string) => void,
  id: number,
) => {
  let counter = 10;
  const item = BOOSTERS.find((item) => item.id === id);

  timer.innerText = String(counter);

  if (item && 'timer' in item) item.timer = false;
  const timerId = setInterval(() => {
    if (counter > 0) {
      counter--;
      timer.innerText = String(counter);
    }

    if (counter == 0) {
      if (item && 'timer' in item) item.timer = true;
      timer.classList.remove('game-boosters__item-timer_active');
      func(FallingItem.prevState || '');
      clearInterval(timerId);
    }
  }, 1000);
};
