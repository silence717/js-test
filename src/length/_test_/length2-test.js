/**
 * @description []
 * @author [silence]
 * @date  16/4/10
 */
import Length from '../length2.js';


// 相等性测试
describe('two length is equal', () => {
    // 相同单位
    it('compare two same unit is equal', () => {
        let length1 = new Length(1);
        let length2 = new Length(1);
        expect(Length.isEqual(length1, length2)).toBeTruthy();
    });

    it('compare two same unit is not equal', () => {
        let length1 = new Length(1);
        let length2 = new Length(2);
        expect(Length.isEqual(length1, length2)).toBeFalsy();
    });

    // 不同单位
    it('compare two different units of equal length', () => {
        let length1 = new Length(1, 'cm');
        let length2 = new Length(10, 'mm');
        expect(Length.isEqual(length1, length2)).toBeTruthy();
    });

    it('compare two different lengths of different units ', () => {
        let length1 = new Length(1, 'cm');
        let length2 = new Length(1, 'mm');
        expect(Length.isEqual(length1, length2)).toBeFalsy();
    });
});

// 相加性测试
describe('add two length', () => {

    it('add the same  unit', () => {
        let length1 = new Length(1, 'cm');
        let length2 = new Length(2, 'cm');
        expect(Length.add(length1, length2)).toBe('30mm');
    });

    it('add the different unit', () => {
        let length1 = new Length(1, 'cm');
        let length2 = new Length(20, 'mm');
        expect(Length.add(length1, length2)).toBe("30mm");
    });

});

// 相减性测试
describe('sub two length', () => {

    it('sub the same unit', () => {
        let length1 = new Length(2, 'cm');
        let length2 = new Length(1, 'cm');
        expect(Length.sub(length1, length2)).toBe("10mm");
    });

    it('sub the different unit', () => {
        let length1 = new Length(2, 'cm');
        let length2 = new Length(10, 'mm');
        expect(Length.sub(length1, length2)).toBe("10mm");
    });
});