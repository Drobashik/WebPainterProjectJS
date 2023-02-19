import { ElementConfigurator } from "./ElementConfigurator";

export class FiguresRenderer {
    constructor() {
        this.elementHandler = new ElementConfigurator();

        this.toolsFieldElement = document.getElementById('tools');
        this.painterField = document.getElementById('painter');
    }

    renderTools(tools) {
        for (const tool of tools) {
            const createdTool = this.elementHandler.configureElement(tool)
            this.elementHandler.insertElement(
                this.toolsFieldElement, createdTool
            );
        }
        return this.toolsFieldElement;
    }

    renderPainter(figure) {
        
    }
}
