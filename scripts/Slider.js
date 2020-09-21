import { Common } from './Common.js';

const sliderImageSelector = '[data-image-slider]';
const previousButtonSelector = '[data-previous-button]';
const nextButtonSelector = '[data-next-button]';
const imagesToSlide = ['./images/corona-4916954_960_720.jpeg','./images/stayhome.jpeg', './images/corona-virus-5251013_960_720.jpeg', './images/quarantine.jpeg'];
let index = 0;
let intervalIndex = null;
let canAutomaticallyChange = true;


class Slider extends Common{
    constructor(){
        super(sliderImageSelector);
        this.element.style.backgroundImage = `url(${imagesToSlide[index]})`
        const nextSlideButton = super.grabElement(nextButtonSelector);
        const previousSlideButton = super.grabElement(previousButtonSelector);
        nextSlideButton.addEventListener('click',()=>this.handleNextSlide());
        previousSlideButton.addEventListener('click',()=>this.handlePreviousSlide());
        this.autoSlide();
    }

    handleNextSlide(){
       clearInterval(intervalIndex);
       canAutomaticallyChange = false;
       this.nextSlide();
      
       if(!canAutomaticallyChange){
        setTimeout(()=>this.autoSlide(),5000)
       }
    }

    handlePreviousSlide(){
        clearInterval(intervalIndex);
        canAutomaticallyChange = false; 
        this.previousSlide();

        if(!canAutomaticallyChange){
        setTimeout(()=>this.autoSlide(),4000)
        }
    }

    nextSlide(){
        index++;
        if(index > imagesToSlide.length-1){
            index = 0;
        };
        this.element.style.backgroundImage = `url(${imagesToSlide[index]})`;
    }

    previousSlide(){
        index--;
        if(index < 0){
            index = imagesToSlide.length-1;
        };
        this.element.style.backgroundImage = `url(${imagesToSlide[index]})`;
    }

    autoSlide(){
        clearInterval(intervalIndex);
        intervalIndex = setInterval(()=>this.nextSlide(),4000);
    }
}

window.addEventListener('DOMContentLoaded', ()=>{
    const slider = new Slider();
})














