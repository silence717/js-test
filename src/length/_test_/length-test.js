// /**
//  * @description [测试长度的类库]
//  * @author [silence]
//  * @date  16/4/8
//  */
//
// import Length from '../length.js';
//
// // 相等性测试
// describe('isEqual', function () {
//     // 相同单位
//     it('compare with same unit', function () {
//
//         var length1 = {number: 1, unit: 'cm'};
//         var length2 = {number:1, unit: 'cm'};
//         expect(Length.isEqual(length1, length2)).toBeTruthy();
//     });
//     // 不同单位
//     it('compare with different unit', function () {
//         var length1 = {number: 1, unit: 'cm'};
//         var length2 = {number: 1, unit: 'mm'};
//         expect(Length.isEqual(length1, length2)).not.toBeTruthy();
//     });
// });
//
// // 相加性测试
// describe('add', function () {
//
//     it('add the same  unit', function () {
//         var length1 = {number: 1, unit: 'cm'};
//         var length2 = {number: 1, unit: 'cm'};
//         expect(Length.add(length1, length2)).toBe(20);
//     });
//
//     it('add the different unit', function () {
//         var length1 = {number: 1, unit: 'cm'};
//         var length2 = {number: 20, unit: 'mm'};
//         expect(Length.add(length1, length2)).toBe(30);
//     });
//
// });
//
// // 相减性测试
// describe('sub', function () {
//
//     it('sub the same unit', function () {
//         var length1 = {number: 2, unit: 'cm'};
//         var length2 = {number: 10, unit: 'mm'};
//         expect(Length.sub(length1, length2)).toBe(10);
//     });
//
//     it('sub the different unit', function () {
//         var length1 = {number: 2, unit: 'cm'};
//         var length2 = {number: 10, unit: 'mm'};
//         expect(Length.sub(length1, length2)).toBe(10);
//     });
// });