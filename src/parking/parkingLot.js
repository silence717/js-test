/**
 * @description [停车场:停,出]
 * @author [fang.yang@shuyun.com]
 * @date  2016-04-19
 */
export default class ParkingLot {

    constructor (capacity, name) {
        this.capacity = capacity;
        this.name = name;
        this.parkedCar = new Map();
    }

    // 停车动作
    parkCar(car) {
        if (!this.isFull()) {
            this.parkedCar.set(car.plateNum, car);
            return true;
        }
        return false;

    }
    // 是否已满
    isFull() {
        return this.parkedCar.size >= this.capacity;
    }
    // 是否存在于这个停车场
    isExit(car) {
        return this.parkedCar.has(car.plateNum);
    }
    // 取车
    takeCar(car) {
        if (this.isExit(car)) {
            this.parkedCar.delete(car.plateNum);
            return true;
        }
        return false;
    }
    // 获取空位
    getEmptySpace() {
        return this.capacity - this.parkedCar.size;
    }
};
