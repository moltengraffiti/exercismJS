//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const COLOURS = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"]

export const colourCode = (colour) => {
  if (COLOURS.includes(colour)) {
   return COLOURS.indexOf(colour);
  }

};


