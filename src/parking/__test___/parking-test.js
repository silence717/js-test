/**
 * @description [停车场问题单元测试]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-21
 */

import Car from '../car';
import ParkingLot from '../parkingLot';

describe('parking lot problem:', () => {

    let carA = null;
    let carB = null;
    let carC = null;

    beforeEach(() => {
        carA = new Car('陕A123');
        carB = new Car('陕A456');
        carC = new Car('陕A789');
    });

    // 可以停车
    describe('should be able to park car: ', () => {

        it('parking not full', () => {
            let parkingLot = new ParkingLot(1);
            expect(parkingLot.parkCar(carA)).toBeTruthy();
        });

        it('parking is full, someone take a car', () => {
            let parkingLot = new  ParkingLot(1, 'a');
            parkingLot.parkCar(carA);
            expect(parkingLot.parkCar(carB)).toBeFalsy();
            parkingLot.takeCar(carA);
            expect(parkingLot.parkCar(carB)).toBeTruthy();
        });

    });
    // 进不去
    describe('should unable to park car: ', () => {

        it('the parking lot is full', () => {
            let parkingLot = new ParkingLot(1, 'a');
            parkingLot.parkCar(carA);
            expect(parkingLot.parkCar(carB)).toBeFalsy();
        });

        it('the parking capacity is 2 and parked 1 car, enter 2 car, one parking failed', () => {
            let parkingLot = new ParkingLot(2, 'a');
            parkingLot.parkCar(carA);
            expect(parkingLot.parkCar(carB)).toBeTruthy();
            expect(parkingLot.parkCar(carC)).toBeFalsy();
        });

    });
    // 可以出去
    describe('should take car successfully:', () => {
        it('陕A123 car number exists in parking lot',() => {
            let parkingLot = new ParkingLot(3, 'a');
            parkingLot.parkCar(carA);
            expect(parkingLot.takeCar(carA)).toBeTruthy();
        });
    });
    // 出不去
    describe('should take car failed:', () => {
        it('陕A456 car number not exists in parking lot',() => {
            let parkingLot = new ParkingLot(3, 'a');
            expect(parkingLot.takeCar(carB)).toBeFalsy();
        });
    });
});
