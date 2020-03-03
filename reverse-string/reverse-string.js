//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Loop backwards through the provided string and add the values to a new array


export const reverseString = (stringy) => {
  let i = stringy.length - 1;
  let reverseStringy='';
  for (stringy[i]; i >= 0; i-- ){
    reverseStringy+=stringy[i];

  }
  return reverseStringy;


};
