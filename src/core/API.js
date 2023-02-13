// TODO: finish array of instruments, figures and fields

import { instrumentExecutor, painter } from "../app";

export const getListenerFunctions = () => {
    return [
        {
            element: painter.paintField,
            event: 'mousemove',
            callback: (event) => {
                painter.painting.call(painter, event);
            }
        },
        {
            element: painter.paintField,
            event: 'mouseup',
            callback: painter.endPainting.bind(painter)
        },
        {
            element: painter.paintField,
            event: 'mousedown',
            callback: (event) => {
                painter.startPaint.call(painter)
                painter.painting.call(painter, event);
            }
        },
        {
            element: document.getElementById('recycle'),
            event: 'click',
            callback: instrumentExecutor.executeWithTool.bind(instrumentExecutor, 'recycle')
        }
    ]
}