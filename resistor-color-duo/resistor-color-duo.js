//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const COLOURS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
let value;

export const decodedValue = ([colour1, colour2]) => {
  if (COLOURS.includes(colour1) && COLOURS.includes(colour2)) {
    value = COLOURS.indexOf(colour1)*10+COLOURS.indexOf(colour2);;
    return value;

  }
}
