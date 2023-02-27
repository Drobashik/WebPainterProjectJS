import { ElementConfigurator } from "../ElementConfigurator";

export class Figure {
    constructor(width, height, color = 'black', position = { x: null, y: null }) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.position = position;
        this.elementHandler = new ElementConfigurator();
    }

    configureFigure(figure) {
        const createdFigure = this.elementHandler.configureElement(figure);
        this.elementHandler.setElementPosition(createdFigure, figure.position)
        this.elementHandler.insertElement(document.getElementById('painter'), createdFigure)
        return createdFigure;
    }
}