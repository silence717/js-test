/**
 * @description [ES6编写测试代码]
 * @author [silence]
 * @date  16/4/11
 */
export default class Length {

    constructor(length, unit) {
        this.length = length;
        this.unit = unit;
    }
    toString () {
        return this.length + this.unit;
    }
    equals(len) {
        return this.toMM(this) == this.toMM(len);
    }
    toMM(len) {
        let length = len.length;
        let unit = len.unit;
        if (unit == 'mm') {
            length *= 1;
        }
        if (unit == 'cm') {
            length *= 10;
        }
        if (unit == 'm') {
            length *= 1000;
        }
        return length;
    }
}
