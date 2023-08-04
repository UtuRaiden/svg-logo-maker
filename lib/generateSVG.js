const { Circle, Triangle, Square } = require('./shapes');



function renderShape(shape, shapeColor){
    if (shape ==='Circle'){
        const shapeRender = new Circle(150,100,100)
    return `${shapeRender.render()} fill=" ${shapeColor}" />`
    }

    if (shape ==='Triangle'){
        const shapeRender = new Triangle("150","18 244","182 56","182")
    return `${shapeRender.render()} fill="${shapeColor}" />`
}

    if (shape ==='Square'){
    return `${new Square(90,40)}width="120" height="120" fill="${shapeColor}" />`
    }
}



function generateSVG(data){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${renderShape(data.shape, data.shapeColor)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.characterColor}">${data.text}</text>

    </svg>
    
    ` 

}


module.exports = generateSVG;