/**
 * @description []
 * @author [silence]
 * @date  16/4/11
 */

import Length from '../length3.js';

describe('length equals', ()=> {

    it('One mm should be equal One mm ', () => {
        let lenA = new Length(1, 'mm');
        let lenB = new Length(1, 'mm');
        expect(lenA.equals(lenB)).toBeTruthy();
    });

    it('One mm should not be equal Two mm', () => {
        let lenA = new Length(1, 'mm');
        let lenB = new Length(2, 'mm');
        expect(lenA.equals(lenB)).toBeFalsy();
    });

    it('One cm should be equal Ten mm', () => {
        let lenA = new Length(1, 'cm');
        let lenB = new Length(10, 'mm');
        expect(lenA.equals(lenB)).toBeTruthy();
    });

    it('One cm should not be equal Two mm', () => {
        let lenA = new Length(1, 'cm');
        let lenB = new Length(2, 'mm');
        expect(lenA.equals(lenB)).toBeFalsy();
    });

    it('One m should be equal One Thousand mm', () =>{
        let lenA = new Length(1, 'm');
        let lenB = new Length(1000, 'mm');
        expect(lenA.equals(lenB)).toBeTruthy();
    });
    
});