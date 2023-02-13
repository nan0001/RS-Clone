import Entrance from '../../components/pages/entrance/Entrance';
import Sound from '../../components/sound/Sound';
import createElement from '../helpers/createElement';
import { CONSTANTS } from './constants';
import '../styles/reset.scss';
import '../styles/index.scss';
import './app.scss';
import Controls from '../../components/controls/Controls';
import store from '../components/store/store';
import { VIEW } from '../helpers/constants';
import GameBoard from '../../components/pages/gameBoard/GameBoard';
import FactoryPage from '../../components/pages/factoryPage/FactoryPage';

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
          if (!page.classList.contains(CONSTANTS.pageSelectors.cookie)) {
            appRoot.removeChild(page);
            appRoot.append(GameBoard.draw());
          }

          break;
        case VIEW.factory:
          if (!page.classList.contains(CONSTANTS.pageSelectors.factory)) {
            appRoot.removeChild(page);
            appRoot.append(FactoryPage.draw());
          }

          break;
        default:
          if (!page.classList.contains(CONSTANTS.pageSelectors.entrance)) {
            appRoot.removeChild(page);
            appRoot.append(Entrance.draw());

            if (GameBoard.timerId) GameBoard.stopGame();
            console.log(GameBoard.timerId);
          }

          break;
      }
    });

    document.body.append(overlay);
  }
}

export default App;
