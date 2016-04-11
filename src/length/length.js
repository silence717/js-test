/**
 * @description []
 * @author [silence]
 * @date  16/4/8
 */
var Length = {

    /**
     * 判断是否相等
     * @param obj1
     * @param obj2
     */
    isEqual: function (obj1, obj2) {
        var _obj1 = this.convertUnit(obj1);
        var _obj2 = this.convertUnit(obj2);
        return obj1.number == obj2.number ? true : false;
    },
    /**
     * 长度相加
     * @param obj1
     * @param obj2
     */
    add: function (obj1, obj2) {
        var obj1 = this.convertUnit(obj1);
        var obj2 = this.convertUnit(obj2);
        return obj1.number + obj2.number;
    },

    /**
     * 长度相减
     * @param obj1
     * @param obj2
     */
    sub: function (obj1, obj2) {
        var obj1 = this.convertUnit(obj1);
        var obj2 = this.convertUnit(obj2);
        return obj1.number - obj2.number;
    },

    /**
     * 需要转换单位的对象
     */
    convertUnit: function (object) {
        var number = object.number;
        var unit = object.unit;

        switch(object.unit) {
            case 'm':
                number *= 1000;
                break;
            case 'cm':
                number *= 10;
                break;
            case 'mm':
                number *= 1;
                break;
            default:
                number *= 1;
                break;
        }
        object.number = number;
        object.unit = 'mm';
        return object;
    }
};

module.exports = Length;