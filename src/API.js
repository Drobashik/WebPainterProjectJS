// TODO: finish array of instruments, figures and fields

import { Circle } from "./core/figures/Circle";
import { Square } from "./core/figures/Square";
import { Painter } from "./core/Painter";
import { Instruments } from "./core/instruments/Instruments";
import { Recycler } from "./core/instruments/Recycler";
import { Colour } from "./core/instruments/Colour";
import { Range } from "./core/instruments/Range";
import { Image } from "./core/instruments/Image";


const getTools = (event, element, color, range) => {
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
        )
    ]
}


export const getListenerFunctions = (tools) => {
    const painter = new Painter(tools);
    const image = new Image();
    const recylcer = new Recycler();
    const range = new Range();
    const colourHandler = new Colour();


    const instrumentExecutor = new Instruments(
        recylcer,
        colourHandler,
        range,
        image,
    );


    return [
        {
            element: document.getElementById('painter'),
            event: 'mousemove',
            callback(event) {
                painter.painting(getTools(event, this, colourHandler, range));
            }
        },
        {
            element: document.getElementById('painter'),
            event: 'mouseup',
            callback() {
                painter.endPainting();
            }
        },
        {
            element: document.getElementById('painter'),
            event: 'mousedown',
            callback(event) {
                painter.startPaint();
                painter.painting(getTools(event, this, colourHandler, range));
            }
        },
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
                )
            }
        },
        {
            element: document.getElementById('fileType'),
            event: 'change',
            callback: (event) => {
                instrumentExecutor.executeWithTool.call(
                    instrumentExecutor, event.target.files[0], 'fileType'
                )
            }
        },
        {
            element: document,
            event: 'click',
            callback: (event) => {
                range.handleClick.call(range, event)
            }
        }
    ]
}