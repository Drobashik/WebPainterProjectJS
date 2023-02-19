import { getListenerFunctions } from "./API";
import { Circle } from "./core/figures/Circle";
import { Square } from "./core/figures/Square";
import { FiguresRenderer } from "./core/FiguresRenderer";
import { Tools } from "./core/Tools";

const tools = new Tools([
    new Circle(75, 75, 'black'),
    new Square(75, 75, 'black'),
]);

new FiguresRenderer()
    .renderTools(tools.tools)
    .addEventListener("click", function(event) {
        tools.chooseTool.call(tools, event.target, this.children)
    });

getListenerFunctions(tools).forEach(listener => {
    listener.element.addEventListener(listener.event, listener.callback);
})