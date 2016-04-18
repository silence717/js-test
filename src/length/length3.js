/**
 * @description [ES6编写测试代码]
 * @author [silence]
 * @date  16/4/11
 */

export default class Length {

    constructor(length ,unit) {
        this.length = length;
        this.unit = unit;
    }

    equals(that) {
        return this.unit.toMM(this.length) == that.unit.toMM(that.length);
    }

    add(that) {
        return this.unit.toMM(this.length) + that.unit.toMM(that.length);
    }

    sub(that) {
        return this.unit.toMM(this.length) - that.unit.toMM(that.length);
    }
}