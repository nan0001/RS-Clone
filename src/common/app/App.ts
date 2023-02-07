import Entrance from '../../components/pages/entrance/Entrance';
import Sound from '../../components/sound/Sound';
import createElement from '../helpers/createElement';
import { CONSTANTS } from './constants';
import '../styles/reset.scss';
import './app.scss';
import Controls from '../../components/controls/Controls';
import store from '../components/store/store';
import { VIEW } from '../helpers/constants';

class App {
  static init(): void {
    const overlay = createElement(CONSTANTS.overlay);
    const appRoot = createElement(CONSTANTS.appRoot);

    appRoot.append(Controls.draw(), Entrance.draw());

    overlay.addEventListener('click', () => {
      overlay.remove();
      document.body.append(appRoot);
      Sound.play();
    });

    store.subscribe(() => {
      const state = store.getState();
      const view = state.view.view;
      const page = appRoot.lastChild as HTMLElement;

      switch (view) {
        case VIEW.cookie:
          //тут подключить страницу игры
          break;
        case VIEW.factory:
          //тут подключить страницу заводов
          break;

        default:
          appRoot.removeChild(page);
          appRoot.append(Entrance.draw());

          break;
      }
    });

    document.body.append(overlay);
  }
}

export default App;
