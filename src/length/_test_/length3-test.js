// /**
//  * @description []
//  * @author [silence]
//  * @date  16/4/11
//  */
//
// import Length from '../length3.js';
// import units from '../unit.js';
//
// describe('length equals', ()=> {
//     let lenA = null;
//     let lenB = null;
//     it('One mm should be equal One mm ', () => {
//         lenA = new Length(1, units.mm);
//         lenB = new Length(1, units.mm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One mm should not be equal Two mm', () => {
//         lenA = new Length(1, units.mm);
//         lenB = new Length(2, units.mm);
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
//
//     it('One cm should be equal Ten mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(10, units.mm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One cm should not be equal Two mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(2, units.mm);
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
//
//     it('One m should be equal One Thousand mm', () =>{
//         lenA = new Length(1, units.m);
//         lenB = new Length(1000, units.mm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One m should be equal One Hundred cm', () => {
//         lenA = new Length(1, units.m);
//         lenB = new Length(100, units.cm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
// });
//
//
// // 相加性测试
// describe('add', () => {
//
//     let lenA = null;
//     let lenB = null;
//     it('one cm add one cm should be twenty mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(1, units.cm);
//         expect(lenA.add(lenB)).toBe('20' + units._baseUnit);
//     });
//
//     it('one cm add one mm should be eleven mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(1, units.mm);
//         expect(lenA.add(lenB)).not.toBe('110'+units._baseUnit);
//     });
//
// });
//
// // 相减性测试
// describe('sub', () => {
//
//     let lenA = null;
//     let lenB = null;
//     it('one cm sub one cm should be twenty mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(1, units.cm);
//         expect(lenA.subtract(lenB)).toBe('0' + units._baseUnit);
//     });
//
//     it('one cm add one mm should be eleven mm', () => {
//         lenA = new Length(1, units.cm);
//         lenB = new Length(1, units.mm);
//         expect(lenA.subtract(lenB)).not.toBe('10'+units._baseUnit);
//     });
// });