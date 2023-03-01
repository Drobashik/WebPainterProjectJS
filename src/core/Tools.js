import { ElementConfigurator } from "./ElementConfigurator";
import { Circle, Square } from "./_index";

export class Tools {
    #_figure
    constructor(tools) {
        this.tools = tools;
        this.elementHandler = new ElementConfigurator();

        this.#_figure = null;
        this.toolsFieldElement = document.getElementById('tools');
    }

    get figure() {
        return this.#_figure;
    }

    set figure(_figure) {
        this.#_figure = _figure;
    }

    chooseTool(tool, instrumentExecutor) {
        if (tool.id === 'tools') return;
        instrumentExecutor.reset();

        if (tool.className === this.figure) {
            tool.style.transform = 'scale(1)';
            this.#_figure = null;
            return;
        }

        for (const toolElement of this.toolsFieldElement.children) {
            toolElement.style.transform = 'scale(1)';
        }

        tool.style.transform = 'scale(1.2)';
        this.#_figure = tool.className;
    }

    renderTools() {
        for (const tool of this.tools) {
            const createdTool = this.elementHandler.configureElement(tool)
            this.elementHandler.insertElement(
                this.toolsFieldElement, createdTool
            );
        }
        return this.toolsFieldElement;
    }

    reset() {
        for (const toolElement of this.toolsFieldElement.children) {
            toolElement.style.transform = 'scale(1)';
        }
        this.#_figure = null;
    }

    getTools(event, element, { range, color }) {
        return [
            new Circle(
                range.value, range.value, color.value,
                {
                    x: event.clientX - element.offsetLeft - range.value / 2,
                    y: event.clientY - element.offsetTop - range.value / 2
                },
            ),
            new Square(
                range.value, range.value, color.value,
                {
                    x: event.clientX - element.offsetLeft - range.value / 2,
                    y: event.clientY - element.offsetTop - range.value / 2
                },
            ),
        ];
    }
}