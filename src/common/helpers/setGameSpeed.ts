import store from '../components/store/store';
import { changeSpeed } from '../components/store/reducers/fallingItems';
import { COOKIES_SPEED } from './constants';
import FallingItem from '../../components/fallingItems/FallingItems';

export const setGameSpeed = () => {
  const windowWidth = document.body.getBoundingClientRect().width;
  const mql = window.matchMedia('(max-width: 750px)');

  if (windowWidth > 750) {
    store.dispatch(changeSpeed(COOKIES_SPEED.low));
  } else {
    store.dispatch(changeSpeed(COOKIES_SPEED.high));
  }

  function screenTest(e: MediaQueryListEvent) {
    const currentSpeed = store.getState().fallingItems.speed;

    if (e.matches) {
      FallingItem.changeSpeed(currentSpeed / 2);
    } else {
      FallingItem.changeSpeed(currentSpeed * 2);
    }
  }

  mql.addEventListener('change', screenTest);
};
