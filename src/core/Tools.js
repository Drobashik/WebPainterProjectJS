export class Tools {
    constructor(...tools) {
        this.tools = tools;
    }

    get figure() {
        return this._figure;
    }

    set figure(_figure) {
        this._figure = _figure;
    }

    chooseTool(element) {
        if (element.id === 'figures') return;

        if (element.className === this.figure) {
            element.style.transform = 'scale(1)';
            this.figure = null;
            return;
        }
        
        element.style.transform = 'scale(1.2)';
        this.figure = element.className;
    }
}