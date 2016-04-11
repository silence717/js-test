/**
 * @description []
 * @author [silence]
 * @date  16/4/10
 */
import Length from '../length2.js';


// 相等性测试
describe('two length is equal', () => {
    // 相同单位
    it('compare with same unit', () => {

        let length1 = new Length(1, 'cm');
        let length2 = new Length(1, 'cm');
        expect(Length.isEqual(length1, length2)).toBeTruthy();
    });
    // 不同单位
    it('compare with different unit', () => {
        let length1 = new Length(1, 'cm');
        let length2 = new Length(1, 'mm');
        expect(Length.isEqual(length1, length2)).not.toBeTruthy();
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

// // 测试单位转换
// describe('convert the unit', () => {
//
//     it('convert m to mm', () => {
//         var length = new Length(1, 'm').formatUnit();
//         expect(length.number).toBe(1000);
//     });
//
//     it('convert cm to mm', () => {
//         var length = new Length(1, 'cm').formatUnit();
//         expect(length.number).toBe(10);
//     });
//
//     it('convert mm to mm', () => {
//         var length = new Length(1, 'mm').formatUnit();
//         expect(length.number).toBe(1);
//     });
//
// });