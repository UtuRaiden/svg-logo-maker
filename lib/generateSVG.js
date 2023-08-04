function renderShape(shape){
    if (shape ==='Circle')
    return

    if (shape ==='Triangle')
    return

    if (shape ==='Square')
    return
}



function generateSVG(data){
    return`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="green" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

    </svg>
    
    ` 

}


module.exports = generateSVG;