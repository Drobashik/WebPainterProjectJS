import intitiateApp from "./API";

intitiateApp().forEach(listener => 
    listener.element.addEventListener(listener.event, listener.callback));
