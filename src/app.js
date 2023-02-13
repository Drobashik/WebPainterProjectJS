import { getListenerFunctions } from "./core/API";
import { Circle } from "./core/figures/Circle";
import { Square } from "./core/figures/Square";
import { Instruments } from "./core/instruments/Instruments";
import { Recycler } from "./core/instruments/Recycler";
import { Painter } from './core/Painter'
import { Tools } from "./core/Tools";
import View from "./core/View";

const tools = new Tools(
    new Circle(75, 75, 'black'),
    new Square(75, 75, 'black')
);

export const painter = new Painter(
    tools,
    new Circle(100, 100, 'black'),
    new Square(100, 100, 'black')
);

export const instrumentExecutor = new Instruments(
    new Recycler(painter.paintField)
);

new View(
    ...tools.tools
).renderTools('figures')
    .addEventListener("click", (event) => {
        tools.chooseTool.call(tools, event.target);
    });

getListenerFunctions().forEach(listener => {
    listener.element.addEventListener(listener.event, listener.callback)
});