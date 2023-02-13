export class Recycler {
    constructor(painterField = document.body) {
        this.painterField = painterField;
        this.instrumentName = 'recycle';
    }

    execute() {
        this.painterField.innerHTML = '';
    }
}