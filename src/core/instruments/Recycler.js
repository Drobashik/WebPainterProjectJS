export class Recycler {
    constructor() {
        this.painterField = document.getElementById('painter');
        this.name = 'recycle';
    }

    execute(value) {
        this.painterField.innerHTML = value;
        this.painterField.insertAdjacentHTML('afterbegin', '<div class="app__sides"></div>');
    }
}