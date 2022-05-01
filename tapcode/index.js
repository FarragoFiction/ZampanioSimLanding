
const TapCode = class{
    text;
    audio;

        constructor(text) {
          this.text=text;
          this.audio = new Audio("scratch1.mp3");
        }


    getRandomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    
      pickFrom = (array) => {
        return array[this.getRandomNumberBetween(0, array.length - 1)];
      }
    
    playScratch = () => {
        const options = ["scratch1.mp3", "scratch2.mp3", "scratch3.mp3", "scratch4.mp3", "scratch5.mp3", "scratch6.mp3", "scratch7.mp3", "scratch8.mp3", "scratch9.mp3", "scratch10.mp3", "scratch11.mp3", "scratch12.mp3", "scratch13.mp3"];
        this.audio.src =(`tapcode/${this.pickFrom(options)}`);
        this.audio.play();
    }
}

