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
        // console.log(this.parkingLotList)
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

};