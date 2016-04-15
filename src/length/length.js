/**
 * @description []
 * @author [silence]
 * @date  16/4/8
 */
function Length(len, unit) {
    this.len = len;
    this.unit = unit;
}

Length.prototype.toString = function () {
    return this.len + this.unit;
};

Length.prototype.toMM = function (len) {
    var length = len.len;
    if (len.unit == 'mm') {
        length *= 1;
    }
    if (len.unit == 'cm') {
        length *= 10;
    }
    if (len.unit == 'm') {
        length *= 1000;
    }
    return length;
};

Length.prototype.equals = function (that) {
    if (that == null ) return false;
    if (that.constructor != Length) return false;
    if (this == that) return true;
    return this.toMM(this) == this.toMM(that);
};

Length.Unit = [{
    mm : '1',
    cm: '10',
    m: '1000'
}];


module.exports = Length;