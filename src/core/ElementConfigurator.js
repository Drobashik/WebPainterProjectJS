import { Circle } from "./figures/Circle";

export class ElementConfigurator {
    createElement(elementName = 'div', object) {
        const element = document.createElement(elementName);
        element.className = object.name;
        return element;
    }

    insertElement(whereInsert, insertingElement) {
        whereInsert.insertAdjacentElement('beforeend', insertingElement);
    }

    insertStyles(element = null, object) {
        element.style.width = object.width + 'px';
        element.style.height = object.height + 'px';
        element.style.backgroundColor = object.color;
        element.style.borderRadius = object instanceof Circle ? '50%' : '0%'
    }

    configureElement(object, elementName = 'div') {
        const createdElement = this.createElement(elementName, object);
        this.insertStyles(createdElement, object);
        return createdElement;
    }

    setElementPosition(element, position) {
        element.style.top = position.y + 'px';
        element.style.left = position.x + 'px';
    }
}