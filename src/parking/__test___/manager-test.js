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

    beforeEach(() => {
        carA = new Car('陕A123');
        carB = new Car('陕A456');
    });

    // 管理员停车
    describe('park car:', () => {
        // 停车成功
        it('park car success when parking lot not full', () => {
            let parkList = [];
            let manager = new Manager(parkList);
            let parkLotA = new ParkingLot(1);
            let parkLotB = new ParkingLot(1);
            parkList.push(parkLotA);
            parkList.push(parkLotB);
            expect(manager.parkCar(carA)).toBeTruthy();
        });

        // 停车失败
        it('park car failed when parking lot is full', () => {
            let parkList = [];
            let parkLotA = new ParkingLot(1);
            let parkLotB = new ParkingLot(1);
            parkLotA.parkCar(carA);
            parkLotB.parkCar(carB);
            parkList.push(parkLotA);
            parkList.push(parkLotB);
            let manager = new Manager(parkList);

            expect(manager.parkCar(carA)).toBeFalsy();

        });
    });

    // 管理员取车
    describe('take car:', () => {
        // 取车成功
        it('take car success when car exist in parking lot', () => {
            let parkList = [];
            let parkLotA = new ParkingLot(1);
            let parkLotB = new ParkingLot(1);
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
            let parkLotA = new ParkingLot(1);
            let parkLotB = new ParkingLot(1);
            parkLotB.parkCar(carB);

            parkList.push(parkLotA);
            parkList.push(parkLotB);
            let manager = new Manager(parkList);
            expect(manager.takeCar(carA)).toBeFalsy();
        });
    });
});