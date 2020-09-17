export class Common{
    constructor(elementSelector){
        if(typeof elementSelector === 'undefined'){
            return
        }
        this.element = this.grabElement(elementSelector);
    }

    grabElement(elementToFindBySelector){
        const element = document.querySelector(elementToFindBySelector);

        if(!element){
            throw new Error(`Element selector not found: ${elementToFindBySelector}`)
        }
        return element;
    }

}

