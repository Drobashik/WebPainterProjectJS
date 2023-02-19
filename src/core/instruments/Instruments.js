export class Instruments {
    constructor(...instruments) {
        this.instruments = instruments;
    }

    executeWithTool(value, id = '') {
        for (const instrument of this.instruments) {
            if (id === instrument.name) {
                instrument.execute(value);
            }
        }
    }
}