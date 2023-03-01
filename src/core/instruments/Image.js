import { ElementConfigurator } from "../ElementConfigurator";

export class Image {
    constructor(painterField) {
        this.paintingField = painterField;
        
        this.elementHanlder = new ElementConfigurator();

        this.fileLoader = document.getElementById('fileType');
        this.name = 'fileType';
    }

    execute(event) {
        const fileUrl = URL.createObjectURL(event.target.files[0]);
        const imageElement = this.elementHanlder.createElement('img', this);
        imageElement.src = fileUrl;
        imageElement.draggable = false;

        setTimeout(() => {
            this.elementHanlder.insertElement(this.paintingField, imageElement);
            this.elementHanlder.setElementPosition(imageElement, {
                x: this.paintingField.offsetWidth / 2 - imageElement.offsetWidth / 2,
                y: this.paintingField.offsetHeight / 2 - imageElement.offsetHeight / 2,
            });
            event.target.value = null;
        }, 10);
    }

    reset() { }
}