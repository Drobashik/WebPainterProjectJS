import { Figure } from "./Figure";

export class Square extends Figure {
    #_name
    constructor(width, height, color, position) {
        super(width, height, color, position);
        this.#_name = 'square'
    }

    set name(type) {
        this.#_name = type.includes('figure') ? `square figure` : this.#_name;
    }

    get name() {
        return this.#_name;
    }

    configure() {
        return super.configureFigure(this);
    }
}