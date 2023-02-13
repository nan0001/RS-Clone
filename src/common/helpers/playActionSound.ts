export const playActionSound = (file: string) => {
  const audio = new Audio(file);
  const soundBtn = document.querySelector('.button__sound');

  if (soundBtn) {
    if (soundBtn.classList.contains('sound-on')) {
      audio.play();
    }
  }
};
