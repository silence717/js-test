/**
 * @description [猜数字游戏单元测试]
 * @author [silence]
 * @date  2016-04-13
 */
import CompareNumber from '../compareNumber';
import AnswerGenerator from '../answerGenerator';

describe('CompareNumber', () => {

    let compareNumber = null;

    beforeEach(() => {
        compareNumber = new CompareNumber();
    });

    it('input 1234 and answer 1234  should return 4A0B', () => {
        expect(compareNumber.compare(1234, 1234)).toBe('4A0B');
    });

    it('input 1235 and answer 1234 should return 3A0B', () => {
        expect(compareNumber.compare(1235, 1234)).toBe('3A0B');
    });

    it('input 4231 and answer 1234 should return 2A2B', () => {
        expect(compareNumber.compare(4231, 1234)).toBe('2A2B');;
    });

    it('input 1567 and answer 1234 shoule return 1A0B', () => {
        expect(compareNumber.compare(1567, 1234)).toBe('1A0B');
    });

    it('input 4321 and answer 1234 should return 0A4B', () => {
        expect(compareNumber.compare(4321, 1234)).toBe('0A4B');
    });

    it('input 3412 and answer 1234 should return 0A4B', () => {
        expect(compareNumber.compare(3412, 1234)).not.toBe('1A4B');
    });

});

describe('AnswerGenerator', () => {

    let answerGenerator = null;
    let answer;
    // let newAns;

    beforeEach(function () {
        answerGenerator = new AnswerGenerator();
        answer = answerGenerator.random();
        // newAns = answerGenerator.random();
    });

    it('the answer length should be 4', () => {
        expect(answer.length).toBe(4);
    });

    it('the answer should be number', () => {
        var reg = new RegExp(/^[0-9]*$/);
        expect(reg.test(answer)).toBeTruthy();
    });

    it('the every character is not same', () => {
        var reg = new RegExp(/(.).*\1/);
        expect(reg.test(answer)).toBeFalsy();
    });

    // it('the random number is not repeat', () => {
    //     expect(answer == newAns).not.toBeFalsy();
    // });

});