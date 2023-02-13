import { Figure } from "./Figure";

export class Square extends Figure {
    constructor(width, height, color) {
        super(width, height, color);
        this._name = 'square';
    }

    set name(type) {
        this._name = type.includes('figure') ? this._name + ' ' + type : this._name;
    }

    get name() {
        return this._name;
    }
}