import { Figure } from "./Figure";

export class Circle extends Figure {
    constructor(width, height, color) {
        super(width, height, color);
        this._name = 'circle';
    }

    set name(type) {
        this._name = type.includes('figure') ? this._name + ' ' + type : this._name;
    }

    get name() {
        return this._name;
    }
}