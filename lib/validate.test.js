const { characterValidate, colorValidate } = require('./validate.js');

describe('Character', () => {
    test('If characters are 3 or lower should return true', () => {
        const test1 = 'a';
        const test2 = 'aa';
        const test3 = 'aaa';
        expect(characterValidate(test1) && characterValidate(test2) && characterValidate(test3)).toEqual(true);
    })
})

describe('Character',()=>{
    test('If character are over 3 should return with an error.',()=>{
        const test1 = 'wayLongerThan3';
        expect(characterValidate(test1)).toEqual("Please only input up to 3 characters.");
    })
})

describe('Color',()=>{
    test('If correct color is input return true',()=>{
        const colorName = 'red';
        const colorHex = '#f34a56';
        expect(colorValidate(colorName) && colorValidate(colorHex)).toEqual(true);
    })
})

describe('Color',()=>{
    test('If incorrect color is input return error',()=>{
        const colorName = 'smed';
        const colorHex = '#z34a56';
        expect(colorValidate(colorName) && colorValidate(colorHex)).toEqual('Invalid color. Please enter a valid color name or hexadecimal code.');
    })
})