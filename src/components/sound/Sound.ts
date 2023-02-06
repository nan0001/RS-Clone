import soundSrc from '../../common/assets/sounds/sound.mp3';

class Sound {
  static audio = new Audio(soundSrc);
  static isPlaying = false;

  static play(): void {
    let volume = 0;
    const maxVolume = 0.2;
    const volumeStep = 0.01;

    this.isPlaying = true;
    this.audio.volume = volume;
    this.audio.currentTime = 0;
    this.audio.play();

    //чтобы звук не резко начинал играть, накручиваю громкость плавно
    const volumeInt = setInterval(() => {
      this.audio.volume = volume;
      volume += volumeStep;

      if (volume >= maxVolume) {
        clearInterval(volumeInt);
      }
    }, 100);

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
