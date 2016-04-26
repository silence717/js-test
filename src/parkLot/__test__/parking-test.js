// /**
//  * @description [停车场问题单元测试]
//  * @author [fang.yang@shuyun.com]
//  * @date  2016-04-21
//  */
//
// import Car from '../car';
// import ParkingLot from '../parkingLot';
//
// describe('parking lot problem:', () => {
//
//     let car = null;
//     let parkingLot = null;
//
//     beforeEach(() => {
//         car = new Car('陕A-99999');
//         parkingLot = new ParkingLot(1);
//     });
//     // 可以停车
//     describe('should be able to park car: ', () => {
//
//         it('has empty space', () => {
//             expect(parkingLot.canParking()).toBeTruthy();
//         });
//
//     });
//     // 进不去
//     describe('should unable to park car: ', () => {
//
//         it('the parking lot is full', () => {
//             parkingLot.park(car);
//             expect(parkingLot.isFull()).toBeTruthy();
//         });
//
//     });
//     // 可以出去
//     describe('should find my car:', () => {
//         it('find the plateNum is 陕A-99999 car',() => {
//             parkingLot.park(car);
//             expect(parkingLot.findMyCar(car)).toBeTruthy();
//         });
//     });
//     // 出不去
//     describe('should not find my car', () => {
//         it('can not find the plateNum is 陕A-99998 car', () => {
//             expect(parkingLot.findMyCar(new Car('陕A-99991'))).toBeFalsy();
//         });
//     });
// });
