const fs = require('fs');
const inquire = require('inquirer');
const shapes = require('./lib/shapes');
const {characterValidate,colorValidate} = require('./lib/validate.js');
const generateSVG = require('./lib/generateSVG.js');


const questions = [
    {
        type:'input',
        message:'What is the title of your logo?',
        name:'title'
    },
    {
        type:'input',
        message:'What 3 characters do you want on your logo?',
        name:'text',
        validate: characterValidate
    },
    {
        type:'input',
        message:'What color do you want the characters to be? (please put in a color name or a # followed by hexadecimal code)',
        name:'characterColor',
        validate: colorValidate
    },
    {
        type:'list',
        message:'What shape do you want your logo to be?',
        choices:['Circle','Triangle','Square'],
        name:'shape'
    },
    {
        type:'input',
        message:'What color do you want your shape to be? (please put in a color name or a # followed by hexadecimal code)',
        name:'shapeColor',
        validate: colorValidate
    }
]

function writeSVG(fileName,data){
fs.writeFile(fileName,generateSVG(data),(err)=>{
    if(err) throw err;
})
}


function init(){
    inquire.prompt(questions)
        .then((data)=>{writeSVG(`./examples/${data.title}.svg`,data)})
}


init()