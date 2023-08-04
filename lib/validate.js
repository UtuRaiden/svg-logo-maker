

function characterValidate(input){
    if(input.length > 3) return 'Please only input up to 3 characters.'
    
    return true;
}

function colorValidate(input) {
    if (typeof input !== 'string') {
      return 'Invalid input. Please provide a valid color.';
    }
  
    const colorRegex = /^#[0-9A-F]{6}$/i;
  
    // Check if the input is a valid 6-digit hexadecimal color code
    if (colorRegex.test(input)) {
      return true;
    }
  
    // Check if the input is a valid color name
    const colors = require('./colorNames.js')
    if (colors.includes(input.toLowerCase())) {
      return true;
    }
  
    // If neither a valid color name nor a valid hexadecimal code, return an error message
    return 'Invalid color. Please enter a valid color name or hexadecimal code.';
  }

module.exports = {characterValidate,colorValidate}
