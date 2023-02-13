import { Circle } from "./figures/Circle";

export default class View {
    constructor(...object) {
        this.objects = object;
    }

    renderTools(id = '') {
        const element = document.getElementById(id);

        for (const object of this.objects) {
            this.configureElement(element, 'div', object);
        }

        return element;
    }

    renderPainter(id = '', renderElement = '', position) {
        const element = document.getElementById(id);
        for (const object of this.objects) {
            if (renderElement && object.name.includes(renderElement)) {
                object.name = 'figure';
                const configuredElement = this.configureElement(element, 'div', object);
                this.setElementPosition(configuredElement, position);
            }
        }
    }

    createElement(elementName = 'div', object) {
        const element = document.createElement(elementName);
        element.className = object.name;
        return element;
    }

    insertElement(element, insertingElement) {
        element.insertAdjacentElement('beforeend', insertingElement);
    }

    insertStyles(element = null, object) {
        element.style.width = object.width + 'px';
        element.style.height = object.height + 'px';
        element.style.backgroundColor = object.color;
        element.style.borderRadius = object instanceof Circle ? '50%' : '0%'
    }

    configureElement(element, elementName, object) {
        const createdElement = this.createElement(elementName, object);
        this.insertStyles(createdElement, object);
        this.insertElement(element, createdElement);
        return createdElement;
    }

    setElementPosition(element, position) {
        element.style.top = position.y + 'px';
        element.style.left = position.x + 'px';
    }
}