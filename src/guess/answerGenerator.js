/**
 * @description [返回一个4位数,每位都不重复]
 * @author [silence]
 * @date  2016-04-15
 */

export default class  AnswerGenerator {
    random() {
        var randomArr = [];

        while (randomArr.length < 4 ) {
            var number = this.getNum();
            if (!randomArr.includes(number)) {
                randomArr.push(number);
            }
        }
        // return randomArr.join('');
        return '1234';
    }

    getNum() {
        return parseInt(Math.random()*10);
    }
}