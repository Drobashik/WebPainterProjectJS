export class Tools {
    constructor() {
    }

    get figure() {
        return this._figure;
    }

    set figure(_figure) {
        this._figure = _figure;
    }

    chooseTool(element, tools) {
        if (element.id === 'figures') return;

        if (element.className === this.figure) {
            element.style.transform = 'scale(1)';
            this.figure = null;
            return;
        }
        
        for (const tool of tools) {
            tool.style.transform = 'scale(1)';
        }

        element.style.transform = 'scale(1.2)';
        this.figure = element.className;
    }
}