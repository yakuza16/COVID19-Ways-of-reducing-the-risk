import { Common } from './Common.js';

const sliderImageSelector = '[data-image-slider]';
const previousButtonSelector = '[data-previous-button]';
const nextButtonSelector = '[data-next-button]';
const imagesToSlide = ['./images/corona-4916954_960_720.jpeg','./images/stayhome.jpeg', './images/corona-virus-5251013_960_720.jpeg', './images/quarantine.jpeg'];
let index = 0;

class Slider extends Common{
    constructor(){
        super(sliderImageSelector);
        const nextSlideButton = super.grabElement(nextButtonSelector);
        const previousSlideButton = super.grabElement(previousButtonSelector);
        nextSlideButton.addEventListener('click',()=>this.nextSlide());
        previousSlideButton.addEventListener('click',()=>this.previousSlide());
       
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

}

export const slider = new Slider();











