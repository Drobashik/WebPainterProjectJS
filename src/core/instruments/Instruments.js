import { Colour } from "./Colour";
import { Range } from "./Range";

export class Instruments {
    constructor(...instruments) {
        this.instruments = instruments;
    }

    get color() {
        return this.instruments.find(instrument => instrument instanceof Colour);
    }

    get range() {
        return this.instruments.find(instrument => instrument instanceof Range);
    }

    executeWithTool(value, id = '') {
        for (const instrument of this.instruments) {
            if (id === instrument.name) {
                instrument.execute(value);
            }
        }
    }
}