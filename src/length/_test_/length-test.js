// /**
//  * @description [测试长度的类库]
//  * @author [silence]
//  * @date  16/4/8
//  */
//
// import Length from '../length.js';
//
// // 相等性测试
// describe('length equals', ()=> {
//
//     it('One mm should be equal One mm ', () => {
//         let lenA = new Length(1, 'mm');
//         let lenB = new Length(1, 'mm');
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One mm should not be equal Two mm', () => {
//         let lenA = new Length(1, 'mm');
//         let lenB = new Length(2, 'mm');
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
//
//     it('One cm should be equal Ten mm', () => {
//         let lenA = new Length(1, 'cm');
//         let lenB = new Length(10, 'mm');
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One cm should not be equal Two mm', () => {
//         let lenA = new Length(1, 'cm');
//         let lenB = new Length(2, 'mm');
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
//
//     it('One m should be equal One Thousand mm', () =>{
//         let lenA = new Length(1, 'm');
//         let lenB = new Length(1000, 'mm');
//         expect(lenA.equals(lenB)).toBeTruthy();
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