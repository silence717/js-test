/**
 * @description [来了一个管理员]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-24
 */
export default class Manager {

    constructor(parkingLotList) {
        this.parkingLotList = parkingLotList;
    }
    // 获取空停车场
    getEmptyParking() {

        for (let i = 0, len = this.parkingLotList.length; i < len; i++) {
            if (!this.parkingLotList[i].isFull()) {
                return this.parkingLotList[i];
            }
        }
        return null;
    }
    // 停车
    parkCar(car) {
        let parkingLot = this.getEmptyParking();
        if (parkingLot != null) {
            parkingLot.parkCar(car);
            return true;
        } else {
            return false;
        }
    }
    // 判断车在哪个停车场
    getExitsParking(car) {

        for (let i = 0, len = this.parkingLotList.length; i < len; i++) {
            if (this.parkingLotList[i].isExit(car)){
                return this.parkingLotList[i];
            }
        }
        return null;
    }

    // 取车
    takeCar(car) {
        let parkingLot = this.getExitsParking(car);
        if (parkingLot != null) {
            parkingLot.takeCar(car);
            return true;
        } else {
            return false;
        }
    }
    // 获取空位最少的停车场
    getLeastEmptySpaceParkingLot() {
        let emptySpace = 0;
        let parking = null;

        this.parkingLotList.forEach(function (parkingLot) {
            if ( emptySpace == 0 || parkingLot.getEmptySpace() < emptySpace) {
                emptySpace = parkingLot.getEmptySpace();
                parking = parkingLot;
            }
        });
       return parking;
    }

    // 停车到空位最少的停车场
    parkCarToLeastEmptySpace(car) {
        let parkingLot = this.getLeastEmptySpaceParkingLot();
        parkingLot.parkCar(car);
        return parkingLot.name;
    }
    // 获取空位最多的停车场
    getMostEmptySpaceParkingLot() {
        let emptySpace = 0;
        let parking = null;

        this.parkingLotList.forEach(function (parkingLot) {
            if (parkingLot.getEmptySpace() > emptySpace) {
                emptySpace = parkingLot.getEmptySpace();
                parking = parkingLot;
            }
        })
        return parking;
    }
    // 停车到空位最少的停车场
    parkCarToMostEmptySpace(car) {
        let parkingLot = this.getMostEmptySpaceParkingLot();
        parkingLot.parkCar(car);
        return parkingLot.name;
    }

};