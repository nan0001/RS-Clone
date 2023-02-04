import './common/styles/reset.scss';
import Menu from './components/menu/Menu';
import Entrance from './components/pages/entrance/Entrance';

document.body.append(Menu.draw(), Entrance.draw());
