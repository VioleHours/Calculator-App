class Display {
    constructor(displayPrevious, displayCurrent){
        this.displayCurrent = displayCurrent;
        this.displayPrevious = displayPrevious;
        this.calculator = new Calculator();
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.signs = {
            add: '+',
            subtract: '-',
            multiply: 'x',
            split: '%'
        }
    }

    delete() {
        this.currentValue = this.currentValue.toString().slice(0, -1);
        this.printValues();
    }

    deleteAll() {
        this.currentValue = '';
        this.previousValue = '';
        this.operationType = undefined;
        this.printValues();
    }

    computation(type){
        this.operationType !== 'igual' && this.calculate();
        this.operationType = type;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printValues();
    }

    addNumber(number){
        if (number === '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + number.toString();
        this.printValues();
    }

    printValues(){
        this.displayCurrent.textContent = this.currentValue;
        this.displayPrevious.textContent = `${this.previousValue} ${this.signs[this.operationType] || ''}`;
    }

    calculate() {
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);

        if (isNaN(currentValue) || isNaN(previousValue)) return 
        this.currentValue = this.calculator[this.operationType](previousValue, currentValue)
    }
}