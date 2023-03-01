export class Range {
    #_value;
    constructor() {
        this.rangeElement = document.getElementById('rangeType');
        this.name = 'rangeType';
        this.#_value = 50;
    }

    get value() {
        return this.#_value;
    }

    execute(value) {
        this.#_value = value;
    }

    handleClick(event) {
        const rangeElementID = document.querySelector('#size');
        const rangeElementClass = document.querySelector('.size__block');

        const isRangeElement = event.target.name === 'range' ||
            event.target.className === 'size__block' ||
            event.target.id === 'size';

        if (isRangeElement) {
            rangeElementClass.style.display = 'block';
            rangeElementID.style.backgroundColor = '#fff';
            return;
        }

        rangeElementClass.style.display = 'none';
        rangeElementID.style.backgroundColor = 'inherit';
    }

    reset() { }
}