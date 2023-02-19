export class Tools {
    constructor(tools) {
        this.tools = tools;

        this._figure = null;
    }

    get figure() {
        return this._figure;
    }

    set figure(_figure) {
        this._figure = _figure;
    }

    chooseTool(tool, toolsElements) {
        if (tool.id === 'tools') return;

        if (tool.className === this.figure) {
            tool.style.transform = 'scale(1)';
            this.figure = null;
            return;
        }
        
        for (const toolElement of toolsElements) {
            toolElement.style.transform = 'scale(1)';
        }

        tool.style.transform = 'scale(1.2)';
        this.figure = tool.className;
    }
}