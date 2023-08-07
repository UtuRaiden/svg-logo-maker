const { Triangle, Circle, Square } = require('./shapes.js');

describe('Shapes',()=>{
    test('Triangle should give correct response',()=>{
        const triangle = new Triangle("150","18 244","182 56","182")
        const expectedResp = `<polygon points="150, 18 244, 182 56, 182"`;
        expect(triangle.render()).toEqual(expectedResp)
    })
})
describe('Shapes',()=>{
    test('Circle should give correct response',()=>{
        const circle = new Circle(150,100,100)
        const expectedResp = `<circle cx=\"150" cy="100" r="100"`;
        expect(circle.render()).toEqual(expectedResp)
    })
})
describe('Shapes',()=>{
    test('Square should give correct response',()=>{
        const square = new Square(90,50,120,120)
        const expectedResp = `<rect x="90" y="50" width="120" height="120" `
        expect(square.render()).toEqual(expectedResp)
    })
})