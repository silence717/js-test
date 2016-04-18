/**
 * @description [单位类库]
 * @author [silence]
 * @date  2016-04-13
 */
class Unit {

    constructor(value) {
        this.value =  value;
    }

    toMM(length) {
        return length * this.value;
    }
}

const units = {
    m: new Unit(1000),
    cm: new Unit(10),
    mm: new Unit(1)
};


module.exports = units;