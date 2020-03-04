//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//Use a case function
export const age = (planet, ageInSeconds) => {
  let calcAge=0;

  let earthAge = ageInSeconds / 31557600;

  switch (planet) {
    case 'earth':
      calcAge = earthAge;
      break;
    case 'mercury':
      calcAge=earthAge / 0.2408467;
      break;
        case 'venus':
      calcAge=earthAge / 0.61519726;
      break;
        case 'mars':
      calcAge=earthAge / 1.8808158;
      break;
        case 'jupiter':
      calcAge=earthAge / 11.862615;
      break;
        case 'saturn':
      calcAge=earthAge / 29.447498;
      break;
        case 'uranus':
      calcAge=earthAge / 84.016846;
      break;
        case 'neptune':
      calcAge=earthAge / 164.79132;
      break;
  }
  return (parseFloat(calcAge.toFixed(2)));

};
