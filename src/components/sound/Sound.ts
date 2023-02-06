import soundSrc from '../../common/assets/sounds/sound.mp3';

class Sound {
  static audio = new Audio(soundSrc);
  static isPlaying = false;

  static play(): void {
    this.isPlaying = true;
    this.audio.currentTime = 0;
    this.audio.play();

    this.audio.addEventListener('ended', () => {
      this.audio.play();
    });
  }

  static stop(): void {
    this.isPlaying = false;
    this.audio.pause();
  }
}

export default Sound;
