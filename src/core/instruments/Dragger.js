import { ElementConfigurator } from "../ElementConfigurator";

export class Dragger {
    constructor(tool) {
        this.tool = tool;

        this.isDraggerSet = false;
        this.isReadyDrag = false;
        this.currentElement = null;

        this.parallelPositionX = 0;
        this.parallelPositionY = 0;

        this.dragButton = document.getElementById('dragger');

        this.elementHandler = new ElementConfigurator();
    }

    reset() {
        this.isDraggerSet = false;
        this.dragButton.style.background = 'inherit';
    }

    setDragger() {
        this.isDraggerSet = !this.isDraggerSet;
        
        this.tool.reset();

        if (this.isDraggerSet) {
            this.dragButton.style.background = '#fff';
            return;
        }

        this.dragButton.style.background = 'inherit';
    }

    startDrag(event, field) {
        if (!this.isDraggerSet) return;

        if (event.target.tagName.includes('IMG')) {
            this.currentElement = event.target;
            this.isReadyDrag = true;

            this.parallelPositionX = ((event.clientX - this.currentElement.offsetLeft - field.offsetLeft) - this.currentElement.offsetWidth) * -1;
            this.parallelPositionY = ((event.clientY - this.currentElement.offsetTop - field.offsetTop) - this.currentElement.offsetHeight) * -1;

            field.append(event.target);
        }
    }

    drag(event, field) {
        if (!this.isReadyDrag && !this.currentElement) return;

        this.elementHandler.setElementPosition(
            this.currentElement,
            {
                x: event.clientX - field.offsetLeft - (this.currentElement.offsetWidth - this.parallelPositionX),
                y: event.clientY - field.offsetTop - (this.currentElement.offsetHeight - this.parallelPositionY),
            }
        );
    }

    endDrag() {
        this.isReadyDrag = false;
        this.currentElement = null;
    }
}