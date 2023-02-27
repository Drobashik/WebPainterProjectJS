import { ElementConfigurator } from "./ElementConfigurator";

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

    chooseTool(tool, toolsElements) {
        if (tool.id === 'tools') return;

        if (tool.className === this.figure) {
            tool.style.transform = 'scale(1)';
            this.#_figure = null;
            return;
        }

        for (const toolElement of toolsElements) {
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
}