import {
    Instruments, Recycler, Range, Image, Colour,
    Painter, Tools,
    Square, Circle
} from './core/_index';

const getTools = (event, element, { range, color }) => {
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
                tools.chooseTool.call(tools, event.target, this.children)
            }
        },

        /* Painting objects */

        {
            element: document.getElementById('painter'),
            event: 'mousedown',
            callback(event) {
                painter.startPaint();
                painter.painting(getTools(event, this, instrumentExecutor));
            }
        },
        {
            element: document.getElementById('painter'),
            event: 'mousemove',
            callback(event) {
                painter.painting(getTools(event, this, instrumentExecutor));
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
            callback: instrumentExecutor.executeWithTool.bind(instrumentExecutor, '', 'recycle')
        },
        {
            element: document.getElementById('colorType'),
            event: 'input',
            callback: (event) => {
                instrumentExecutor.executeWithTool.call(
                    instrumentExecutor, event.target.value, 'colorType'
                );
            }
        },
        {
            element: document.getElementById('rangeType'),
            event: 'change',
            callback: (event) => {
                instrumentExecutor.executeWithTool.call(
                    instrumentExecutor, event.target.value, 'rangeType'
                );
            }
        },
        {
            element: document.getElementById('fileType'),
            event: 'change',
            callback: (event) => {
                instrumentExecutor.executeWithTool.call(
                    instrumentExecutor, event.target.files[0], 'fileType'
                );
            }
        },
        {
            element: document,
            event: 'click',
            callback: instrumentExecutor.range.handleClick,
        },
    ];
}

export default intitiateApp;