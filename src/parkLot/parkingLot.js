/**
 * @description [停车场]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-21
 */

export default class ParkingLot {

    constructor (capacity) {
        this.capacity = capacity;
        this.tokenArray = [];
    }

    park(car) {
        if (this.canParking()) {
            this.tokenArray.push(car.plateNum);
        }
    }

    canParking() {
        return this.capacity - this.tokenArray.length > 0
    }

    isFull() {
        return this.capacity == this.tokenArray.length;
    }

    findMyCar(car) {
        return this.tokenArray.includes(car.plateNum);
    }

}