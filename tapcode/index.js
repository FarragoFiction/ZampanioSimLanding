
const TapCode = class {
    text;
    audio;
    ele;
    parent;
    message;

    constructor(text, parent) {
        this.text = text;
        this.parent = parent;
        this.audio = new Audio("tapcode/scratch1.mp3");
    }

    createElement = ()=>{

        //i have seen this happen at work and i hate it so much so now i gift it to you.
        //have fun having styles that come from *fucking nowhere* in this labyrinth
        const styleComponent = document.createElement("style");
        styleComponent.innerHTML = `
        @font-face {
            font-family: bloodscratch;
            src: url("tapcode/BloodScratchPersonalUse.ttf");
          }

          .tapcode{
            height: 100%;
            width: 90%;
            pointer-events: none;
            position: fixed;
            top: 0px;
            left: 0px;
            color: #c4c4c4;
            opacity: 60%;
            padding: 100px;
            font-size: 4vw;
            font-family: 'bloodscratch';
          }  
        `
        this.parent.append(styleComponent);

        this.ele = document.createElement("div");

        
        this.ele.className='tapcode';
        this.parent.append(this.ele);
        this.message = this.tapCodeToScratches(this.text).join("");
        this.tapcodeLoop(0);
    }

    tapcodeLoop = (index)=>{
        setTimeout(() => {
            this.ele.innerHTML = this.message.substring(0,index);
            if (this.message[index] !== " ") {
                this.playScratch();
            }
            this.tapcodeLoop(index +1);
        }, 500)
    }

    tapCodeToScratches = (tc) => {
        let ret = [];
        const options = ["|", "!", "1", "I"]
        for (let c of tc) {
            if (c !== " ") {
                ret.push(this.pickFrom(options));
            } else {
                ret.push(" ");
                ret.push(" ");
            }
        }
        return ret;
    }


    getRandomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    pickFrom = (array) => {
        return array[this.getRandomNumberBetween(0, array.length - 1)];
    }

    playScratch = () => {
        const options = ["scratch1.mp3", "scratch2.mp3", "scratch3.mp3", "scratch4.mp3", "scratch5.mp3", "scratch6.mp3", "scratch7.mp3", "scratch8.mp3", "scratch9.mp3", "scratch10.mp3", "scratch11.mp3", "scratch12.mp3", "scratch13.mp3"];
        this.audio.src = (`tapcode/${this.pickFrom(options)}`);
        this.audio.play();
    }
}

