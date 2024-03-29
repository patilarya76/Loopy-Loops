
// Important Note - No Built-in functions to be used
// Progression 1: Names and Input
// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

let driver = 'Kalvian-1';
let navigator = 'Kalvian-2';

console.log(`The driver's name is ${driver}`);
console.log(`The navigator's name is ${navigator}`);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has ${driver.length} characters.`
  );
} else if (driver.length < navigator.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${driver.length} characters!`
  );
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5.

function vowels(name) {
  const vowels = 'aeiouAEIOU';
  let vowel = [];
  for (let i = 0; i < name.length; i++) {
    if (vowels.includes(name[i])) {
      vowel.push(i);
    }
  }
  if (vowel.length > 0) {
    console.log(
      `${name} ${vowel.map((index) => name[index]).join(' ')} ${vowel.join(
        ' '
      )}`
    );
  } else {
    console.log('No vowels');
  }
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

vowels(driver);
vowels(navigator);

function countUppercaseLowercase(name) {
  let uppercaseCount = 0;
  let lowercaseCount = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] >= 'A' && name[i] <= 'Z') {
      uppercaseCount++;
    } else if (name[i] >= 'a' && name[i] <= 'z') {
      lowercaseCount++;
    }
  }
  console.log(`Uppercase characters: ${uppercaseCount}`);
  console.log(`Lowercase characters: ${lowercaseCount}`);
}

countUppercaseLowercase(driver);
countUppercaseLowercase(navigator);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"

function driverCaps(name) {
  let capitalizedName = '';
  for (let i = 0; i < name.length; i++) {
    capitalizedName += name[i].toUpperCase() + ' ';
  }
  console.log(capitalizedName.trim());
}

driverCaps(driver);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

function navigatorReversed(name) {
  let reversedName = '';
  for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
  }
  console.log(reversedName);
}

navigatorReversed(navigator);

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

function mergeNames(driver, navigator) {
  console.log(`${navigator} ${driver}`);
}

mergeNames(driver, navigator);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

function compareNames(driver, navigator) {
  if (driver < navigator) {
    console.log("The driver's name goes first.");
  } else if (driver > navigator) {
    console.log('Yo, the navigator goes first definitely.');
  } else {
    console.log('What?! You both have the same name?');
  }
}

compareNames(driver, navigator);

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'