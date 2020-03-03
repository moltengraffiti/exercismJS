//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//Two options
//1) Add alphabet to a map, then regex the values.
//2) Input string to array, then apply formula En(x) = (x+n) mod 26
//Went with option2, struggled for a clean solution until i found https://gist.github.com/EvanHahn/2587465, then needed to add check for non char values in  string

export class RotationalCipher {

  static rotate(input, rotation) {
    let loopChar='';
    let cipherText='';

    //loop through the input
    for (let i = 0; i < input.length; i++) {

      // Determine if charachter
      if (input[i].match(/[a-z]/i)) {

      // Get the relevant value
        let charCode = input.charCodeAt(i);

      // Encrypt it
      // Uppercase letters
			if ((charCode >= 65) && (charCode <= 90))
				loopChar = String.fromCharCode(((charCode - 65 + rotation) % 26) + 65);

			// Lowercase letters
			else if ((charCode >= 97) && (charCode <= 122))
        loopChar = String.fromCharCode(((charCode - 97 + rotation) % 26) + 97);
        // Add to the output string
        cipherText += loopChar;

      }
      //If it's not a charachter
      else{
        cipherText += input[i];
      }

      }

    return cipherText;
  }
}
