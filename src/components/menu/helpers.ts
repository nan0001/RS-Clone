import { changeLang } from '../../common/components/store/reducers/lang';
import store from '../../common/components/store/store';
import { LANG } from '../../common/helpers/constants';
import HelpPopup from '../helpPopup/HelpPopup';
import Sound from '../sound/Sound';
import { CONSTANTS } from './constants';

export function addMenuListeners(
  menu: HTMLElement,
  buttons: {
    menuBtn: HTMLElement;
    fullscrBtn: HTMLElement;
    soundBtn: HTMLElement;
    langBtn: HTMLElement;
    helpBtn: HTMLElement;
  },
): void {
  menu.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;

    if (target === buttons.menuBtn) {
      toggleMenu(menu, buttons.menuBtn);
    }

    if (target === buttons.fullscrBtn) {
      toggleFullscreen(buttons.fullscrBtn);
    }

    if (target === buttons.soundBtn) {
      toggleSound(buttons.soundBtn);
    }

    if (target === buttons.langBtn) {
      toggleLang(buttons.langBtn);
    }

    if (target === buttons.helpBtn) {
      showHelpInfo();
    }
  });
}

function toggleFullscreen(fullscrBtn: HTMLElement): void {
  if (fullscrBtn.classList.contains(CONSTANTS.fullscrBtn.classList[2])) {
    document.body.requestFullscreen();
  } else {
    document.exitFullscreen();
  }

  fullscrBtn.classList.toggle(CONSTANTS.fullscrBtn.classList[2]);
}

function toggleMenu(menu: HTMLElement, menuBtn: HTMLElement): void {
  const menuBtnRotate = [
    { transform: 'rotate(0)' },
    { transform: 'rotate(360deg)' },
  ];
  const menuBtnTiming = {
    duration: 300,
    iterations: 1,
  };

  menu.classList.toggle(CONSTANTS.visible);
  menuBtn.animate(menuBtnRotate, menuBtnTiming);
}

function toggleSound(soundBtn: HTMLElement): void {
  if (soundBtn.classList.contains(CONSTANTS.soundBtn.classList[2])) {
    Sound.stop();
  } else {
    Sound.play();
  }

  soundBtn.classList.toggle(CONSTANTS.soundBtn.classList[2]);
}

function toggleLang(langBtn: HTMLElement): void {
  if (langBtn.classList.contains(CONSTANTS.langBtn.classList[2])) {
    store.dispatch(changeLang(LANG.ru));
  } else {
    store.dispatch(changeLang(LANG.en));
  }

  langBtn.classList.toggle(CONSTANTS.langBtn.classList[2]);
}

function showHelpInfo(): void {
  const popup = new HelpPopup().draw();
  document.body.append(...popup);
}
