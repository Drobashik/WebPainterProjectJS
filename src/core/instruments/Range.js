export class Range {
    constructor() {
        this.rangeElement = document.getElementById('rangeType');
        this.name = 'rangeType';
        this._value = 100;
    }

    get value() {
        return this._value;
    }

    execute(value) {
        this._value = value;
    }

    handleClick(event) {
        if (event.target.name === 'range' ||
            event.target.className === 'size__block' ||
            event.target.id === 'size') {
            document.querySelector('.size__block').style.display = 'block';
            document.querySelector('#size').style.backgroundColor = '#fff';
            return;
        }

        document.querySelector('.size__block').style.display = 'none';
        document.querySelector('#size').style.backgroundColor = 'inherit';
    }
}