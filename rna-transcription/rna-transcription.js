//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//My original plan was to map the values and then loop through the provided dnastring to output the correspoding values and add to another string.
//Instead used regex by finding 1) https://exercism.io/tracks/javascript/exercises/rna-transcription/solutions/db9168d39ece4b57a38c215e27810503
//and reading 2) https://www.w3schools.com/js/js_regexp.asp

export const toRna = (dnaString) => {

  //map the values
  //regex the values

  const map = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  };

  return dnaString.replace(/[CGAT]/g, result => map[result]);
};
