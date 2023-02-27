import {
    Instruments, Recycler, Range, Image, Colour,
    Painter, Tools, Circle, Square,
} from './core/_index';

const intitiateApp = () => {
    const tools = new Tools([
        new Circle(75, 75, 'black'),
        new Square(75, 75, 'black'),
    ]);

    const toolChooserElement = tools.renderTools();

    const painter = new Painter(tools);

    const instrumentExecutor = new Instruments(
        new Recycler(painter.paintField),
        new Image(painter.paintField),
        new Colour(),
        new Range(),
    );

    return [
        /* Tool object */

        {
            element: toolChooserElement,
            event: 'click',
            callback(event) {
                tools.chooseTool(event.target, this.children)
            }
        },

        /* Painting objects */

        {
            element: document.getElementById('painter'),
            event: 'mousedown',
            callback(event) {
                painter.startPaint();
                painter.onPaint(tools.getTools(event, this, instrumentExecutor));
            }
        },
        {
            element: document.getElementById('painter'),
            event: 'mousemove',
            callback(event) {
                painter.onPaint(tools.getTools(event, this, instrumentExecutor));
            }
        },
        {
            element: document.getElementById('painter'),
            event: 'mouseup',
            callback() {
                painter.endPainting();
            }
        },

        /* Instrument objects */

        {
            element: document.getElementById('recycle'),
            event: 'click',
            callback: () => {
                instrumentExecutor.executeWithTool(null, 'recycle');
            }
        },
        {
            element: document.getElementById('colorType'),
            event: 'input',
            callback: (event) => {
                instrumentExecutor.executeWithTool(event.target.value, 'colorType');
            },
        },
        {
            element: document.getElementById('rangeType'),
            event: 'change',
            callback: (event) => {
                instrumentExecutor.executeWithTool(event.target.value, 'rangeType');
            },
        },
        {
            element: document.getElementById('fileType'),
            event: 'change',
            callback: (event) => {
                instrumentExecutor.executeWithTool(event, 'fileType');
            },
        },
        {
            element: document,
            event: 'click',
            callback: instrumentExecutor.range.handleClick,
        },
    ];
}

export default intitiateApp;