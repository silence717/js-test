/**
 * @description [ES6 编写测试]
 * @author [silence]
 * @date  16/4/10
 */

export default class Length {

    constructor(number, unit) {
        this.number = number || 0;
        this.unit = unit || 'mm';
        this.baseNum = this.number * Length.UNIT[this.unit];
    }

    toString() {
        return this.number + this.unit;
    }

    static isEqual(length1, length2) {
        return length1.baseNum == length2.baseNum ? true: false;
    }

    static add(length1, length2) {
        return  new Length(length1.baseNum + length2.baseNum, this.baseUnit).toString();
    }

    static sub(length1, length2) {
        return new Length(length1.baseNum - length2.baseNum, this.baseUnit).toString();
    }
}
Length.UNIT = {
    'm': '1000',
    'cm': '10',
    'mm': '1'
};
Length.baseUnit = 'mm';