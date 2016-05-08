/**
 * @description [测试停车管理员]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-26
 */
import ParkingLot from '../parkingLot';
import Manager from '../manager';
import Car from '../car';

describe('Manger:', () => {

    let carA = null;
    let carB = null;
    let carC = null;
    let carD = null;

    beforeEach(() => {
        carA = new Car('陕A123');
        carB = new Car('陕A456');
        carC = new Car('陕A789');
        carD = new Car('陕B123');
    });

    // 管理员停车
    describe('park car:', () => {
        // 停车成功
        it('park car success when parking lot not full', () => {
            let parkList = [];
            let manager = new Manager(parkList);
            let parkLotA = new ParkingLot(1, 'a');
            let parkLotB = new ParkingLot(1, 'b');
            parkList.push(parkLotA);
            parkList.push(parkLotB);
            expect(manager.parkCar(carA)).toBeTruthy();
        });

        // 停车失败
        it('park car failed when parking lot is full', () => {
            let parkList = [];
            let parkLotA = new ParkingLot(1, 'a');
            let parkLotB = new ParkingLot(1, 'b');
            parkLotA.parkCar(carA);
            parkLotB.parkCar(carB);
            parkList.push(parkLotA);
            parkList.push(parkLotB);
            let manager = new Manager(parkList);

            expect(manager.parkCar(carA)).toBeFalsy();

        });

        // 停到空位最少的停车场
        it('park a car to the least empty space parking lot' , () => {
            let parkList = [];
            let parkLotA = new ParkingLot(2, 'a');
            let parkLotB = new ParkingLot(3, 'b');
            let parkLotC = new ParkingLot(4 ,'c');

            parkLotA.parkCar(carA);
            parkLotB.parkCar(carB);
            parkLotC.parkCar(carC);

            parkList.push(parkLotA);
            parkList.push(parkLotB);
            parkList.push(parkLotC);

            let manager = new Manager(parkList);

            expect(manager.parkCarToLeastEmptySpace(carD)).toBe('a');

        });

        // 停到空位最多的停车场
        it('park a car to the most empty space parking lot' , () => {
            let parkList = [];
            let parkLotA = new ParkingLot(2, 'a');
            let parkLotB = new ParkingLot(3, 'b');
            let parkLotC = new ParkingLot(4 ,'c');

            parkLotA.parkCar(carA);
            parkLotB.parkCar(carB);
            parkLotC.parkCar(carC);

            parkList.push(parkLotA);
            parkList.push(parkLotB);
            parkList.push(parkLotC);

            let manager = new Manager(parkList);

            expect(manager.parkCarToMostEmptySpace(carD)).toBe('c');

        });
    });

    // 管理员取车
    describe('take car:', () => {
        // 取车成功
        it('take car success when car exist in parking lot', () => {
            let parkList = [];
            let parkLotA = new ParkingLot(1, 'a');
            let parkLotB = new ParkingLot(1, 'b');
            parkLotA.parkCar(carA);
            parkLotB.parkCar(carB);
            parkList.push(parkLotA);
            parkList.push(parkLotB);
            let manager = new Manager(parkList);
            expect(manager.takeCar(carA)).toBeTruthy();

        });
        // 取车失败
        it('take car failed when car not exist in parking lot', () => {
            let parkList = [];
            let parkLotA = new ParkingLot(1, 'a');
            let parkLotB = new ParkingLot(1, 'b');
            parkLotB.parkCar(carB);

            parkList.push(parkLotA);
            parkList.push(parkLotB);
            let manager = new Manager(parkList);
            expect(manager.takeCar(carA)).toBeFalsy();
        });
    });
});