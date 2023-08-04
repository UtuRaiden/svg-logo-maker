function renderShape(shape, shapeColor){
    if (shape ==='Circle')
    return `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`

    if (shape ==='Triangle')
    return `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />`

    if (shape ==='Square')
    return `<rect x="90" y="40" width="120" height="120" fill="${shapeColor}" />`
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