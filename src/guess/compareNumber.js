/**
 * @description [比较数字]
 * @author [silence]
 * @date  2016-04-15
 */
export default class CompareNumber {

    compare(input, answer) {
        if (answer == input) {
            return '4A0B';
        } else {
            // 计数器
            let countA = 0;
            let countB = 0;
            // 分割数组
            let answerArr = answer.toString().split('');
            let inputArr = input.toString().split('');

            // 循环遍历两个数组
            for (let i = 0; i < 4; i++) {
                if (answerArr[i] == inputArr[i]) {
                    countA++;
                } else if (answerArr.indexOf(inputArr[i]) != -1){
                    countB++;
                }
            }
            return countA + 'A' + countB + 'B';
        }
    }
}