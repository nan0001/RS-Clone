import FallingItem from '../fallingItems/FallingItems';
import { BOOSTERS } from '../../common/helpers/constants';
import { CONSTANTS } from './constants';
import store from '../../common/components/store/store';

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
      timer.classList.remove('boosters-item__timer_active');
      func(FallingItem.prevState || '');
      clearInterval(timerId);
    }
  }, 1000);
};

export const getText = (item: string) => {
  const lang =
    CONSTANTS.innerText[
      store.getState().lang.lang as keyof typeof CONSTANTS.innerText
    ];

  return lang[item as keyof typeof lang];
};
export const updateDescription = (description: HTMLElement, cost: number) => {
  if (store.getState().cookies.count >= cost) {
    description.style.color = 'white';
    description.style.backgroundColor = `rgba(27, 143, 185, 0.7)`;
    description.textContent = getText('costInfo') + cost;
  } else {
    description.style.color = 'red';
    description.style.backgroundColor = '#fad3d3';
    description.textContent = getText('costInfo2') + cost;
  }

  return description;
};
