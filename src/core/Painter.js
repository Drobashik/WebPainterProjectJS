export class Painter {
    constructor(tools) {
        this.tools = tools
        this.isReadyDraw = false;
        this.paintField = document.getElementById('painter');
    }

    startPaint() {
        this.isReadyDraw = true;
    }

    endPainting() {
        this.isReadyDraw = false;
    }

    onPaint(tools) {
        if (!this.isReadyDraw || !this.tools.figure) return;
        for (const tool of tools) {
            if (tool.name.includes(this.tools.figure)) {
                tool.name = 'figure';
                tool.configure();
            }
        }
    }
}