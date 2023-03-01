export class Recycler {
    constructor(painterField) {
        this.painterField = painterField;
        this.name = 'recycle';
    }

    execute(value) {
        this.painterField.innerHTML = value;
        this.painterField.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>');
    }

    reset() {}
}