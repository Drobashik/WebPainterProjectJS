import View from "./View";

export class Painter {
    constructor(tools, ...paintingBrushes) {
        this.tools = tools;
        this.view = new View(...paintingBrushes);
        this.painter = paintingBrushes[0];

        this.isReadyDraw = false;
        this.paintField = document.getElementById('painter');
    }

    startPaint() {
        this.isReadyDraw = true;
    }

    endPainting() {
        this.isReadyDraw = false;
    }

    painting(event) {
        if (!this.isReadyDraw) return;
        
        this.view.renderPainter(
            'painter',
            this.tools.figure,
            {
                x: event.clientX - this.paintField.offsetLeft - this.painter.width / 2,
                y: event.clientY - this.paintField.offsetTop - this.painter.height / 2
            },
        );
    }
}