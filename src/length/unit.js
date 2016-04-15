/**
 * @description [单位类库]
 * @author [silence]
 * @date  2016-04-13
 */
class Unit {

    constructor(name) {
        this.name = name;
        this.value = this.countValue();
        // this.value = value;
    }

    countValue() {

        if ('mm' == Unit.baseUnit ) {
            if ('mm' == this.name) return 1;
            if ('cm' == this.name) return 10;
            if ('m' == this.name) return 1000;
        }

        if ('cm' == Unit.baseUnit) {
            if ('mm' == this.name) return 0.1;
            if ('cm' == this.name) return 1;
            if ('m' == this.name) return 100;
        }

        if ('m' == Unit.baseUnit) {
            if ('mm' == this.name) return 0.001;
            if ('cm' == this.name) return 0.01;
            if ('m' == this.name) return 1;
        }

    }
}
Unit.baseUnit = 'mm';

const units = {
    m: new Unit('m'),
    cm: new Unit('cm'),
    mm: new Unit('mm'),
    _baseUnit: Unit.baseUnit
};

// const units = {
//     m: new Unit('m', 1000),
//     cm: new Unit('cm', 10),
//     mm: new Unit('mm', 1)
// };
// const units = {
//     m: {name: 'm', value: 1000},
//     cm: {name: 'cm', value: 10},
//     mm: {name: 'mm', value: 1}
// };
module.exports = units;