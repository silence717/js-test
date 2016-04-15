/**
 * @description [ES6编写测试代码]
 * @author [silence]
 * @date  16/4/11
 */
import units from './unit.js';

export default class Length {

    constructor(length, unit) {
        this.length = length;
        this.unit = unit;
    }
    toString () {
        return this.length + this.unit;
    }
    equals(that) {
        if (this.unit == that.unit) {
            return this.length == that.length;
        } else {
            return this.unit.value * this.length == that.unit.value * that.length;
        }
    }
    add(that) {
        var len = this.unit.value * this.length + that.unit.value * that.length;
        return new Length(len, units._baseUnit).toString();
    }
    subtract(that) {
        var len = this.unit.value * this.length - that.unit.value * that.length;
        return new Length(len, units._baseUnit).toString();
    }
}




