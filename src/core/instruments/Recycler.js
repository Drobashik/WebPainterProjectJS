export class Recycler {
    constructor(painterField = document.body) {
        this.painterField = painterField;
        this.instrumentName = 'recycle';
    }

    execute() {
        this.painterField.innerHTML = '';
        this.painterField.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>')
    }
}