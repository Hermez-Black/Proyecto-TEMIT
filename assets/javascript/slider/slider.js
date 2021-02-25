export default class Slider{
    // Destructuring
    constructor({elements, animationFunc, speed}){
        this.elements = elements;
        this.animationFunc = animationFunc;

        this.index = 0;
        this.size = elements.length;

        this.speed = speed;

        this.innerNext = this.innerNext.bind(this);
        this.stop = this.stop.bind(this);

        // Controles de las flechas
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        
    }

    innerNext(){
        this.index++;
        if(this.index >= this.size) this.index = 0;

        this.animationFunc(this.elements[this.index]);
    }

    innerPrev(){
        this.index--;
        if(this.index < 0) this.index = this.size - 1;

        this.animationFunc(this.elements[this.index]);
    }

    next(){
        this.innerNext();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    prev(){
        this.innerPrev();
        if(this.interval){
            this.stop();
            this.play();
        }
    }

    play(){
        this.interval = setInterval(this.innerNext, this.speed);
        // this.interval = setInterval(function(){
        //     this.prev();
        // }, 7000)
    }

    stop(){
        clearInterval(this.interval);
    }
}


// let slider = new Slider([], function(){}) Esto no es legible, así que es mejor usa un json

// let slider = new Slider({
//     elements: ['Hola', 2]
//     // animationFunc: () => {

//     // }
// });
// slider.next();