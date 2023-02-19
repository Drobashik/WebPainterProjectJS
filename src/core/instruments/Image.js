import { ElementConfigurator } from "../ElementConfigurator";

export class Image {
    constructor() {
        this.elementHanlder = new ElementConfigurator();

        this.paintingField = document.getElementById('painter');
        this.fileLoader = document.getElementById('fileType');
        this.name = 'fileType';
    }

    execute(file) {
        const fileUrl = URL.createObjectURL(file);
        const imageElement = this.elementHanlder.createElement('img', this);
        imageElement.src = fileUrl;
        this.elementHanlder.insertElement(this.paintingField, imageElement);
        this.elementHanlder.setElementPosition(imageElement, {
            x: this.paintingField.offsetLeft / 2,
            y: this.paintingField.offsetTop / 2,
        });
    }
}