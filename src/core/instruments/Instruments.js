export class Instruments {
    constructor(...instruments) {
        this.instruments = instruments;
    }

    executeWithTool(id = '') {
        for (const instrument of this.instruments) {
            if (id === instrument.instrumentName) {
                instrument.execute();
            }
        }
    }
}