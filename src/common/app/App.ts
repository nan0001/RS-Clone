import Entrance from '../../components/pages/entrance/Entrance';
import Sound from '../../components/sound/Sound';
import createElement from '../helpers/createElement';
import { CONSTANTS } from './constants';
import '../styles/reset.scss';
import './app.scss';
import Controls from '../../components/controls/Controls';

class App {
  static init(): void {
    const overlay = createElement(CONSTANTS.overlay);

    overlay.addEventListener('click', () => {
      overlay.remove();
      document.body.append(Controls.draw(), Entrance.draw());
      Sound.play();
    });

    document.body.append(overlay);
  }
}

export default App;
