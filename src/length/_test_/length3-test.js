// /**
//  * @description []
//  * @author [silence]
//  * @date  16/4/11
//  */
//
// import Length from '../length3.js';
// import units from '../unit';
//
// // 相等性
// describe('length equals:', ()=> {
//
//     it('One mm should be equal One mm ', () => {
//         let lenA = new Length(1, units.mm);
//         let lenB = new Length(1, units.mm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One mm should not be equal Two mm', () => {
//         let lenA = new Length(1, units.mm);
//         let lenB = new Length(2, units.mm);
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
//
//     it('One cm should be equal Ten mm', () => {
//         let lenA = new Length(1, units.cm);
//         let lenB = new Length(10, units.mm);
//         expect(lenA.equals(lenB)).toBeTruthy();
//     });
//
//     it('One cm should not be equal Two mm', () => {
//         let lenA = new Length(1, units.cm);
//         let lenB = new Length(2, units.mm);
//         expect(lenA.equals(lenB)).toBeFalsy();
//     });
// });
// // 相加性
// describe('length add:', () => {
//
//     it('1 mm add 1 cm should be 11 mm', () => {
//         let lenA = new Length(1, units.mm);
//         let lenB = new Length(1, units.cm);
//         expect(lenA.add(lenB)).toBe(11);
//     }) ;
//
//     it('1 cm add 1 cm should be 20 mm', () => {
//         let lenA = new Length(1, units.cm);
//         let lenB = new Length(1, units.cm);
//         expect(lenA.add(lenB)).toBe(20);
//     });
//
// });
// // 相减性
// describe('length sub:', () => {
//
//     it('1cm sub 1mm should be 9 mm', () => {
//         let lenA = new Length(1, units.cm);
//         let lenB = new Length(1, units.mm);
//         expect(lenA.sub(lenB)).toBe(9);
//     });
//
//
// });