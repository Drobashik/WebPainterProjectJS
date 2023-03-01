export class Colour {
    #_value
    constructor() {
        this.colourElement = document.getElementById('colorType');
        this.name = 'colorType';
        this.#_value = 'black';
    }

    get value() {
        return this.#_value;
    }

    execute(value) {
        this.#_value = value;
    }
    
    reset() {}
}