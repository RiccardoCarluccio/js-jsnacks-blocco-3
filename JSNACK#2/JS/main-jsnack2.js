const ARRAY_OF_NUMBERS = [];
let oddSum  = 0;
let evenSum = 0;

for (i = 0; i < 30; i++) {
  ARRAY_OF_NUMBERS.push(Math.floor(Math.random() * 11));
}
//TEST ARRAY FILLING WITH RANDOM NUMBERS
console.log(`ARRAY_OF_NUMBERS is: ${ARRAY_OF_NUMBERS}`);
//WORKING

for (i = 0; i < ARRAY_OF_NUMBERS.length; i++) {   //.length è ovviamente 30
  if (ARRAY_OF_NUMBERS[i] % 2 !== 0 ) {
    oddSum += parseInt(ARRAY_OF_NUMBERS[i]);
  } else {
    evenSum += parseInt(ARRAY_OF_NUMBERS[i]);
  }
}

//TEST SUMS
console.log(`The sum of the odd numbers is: ${oddSum}`);
console.log(`The sum of the even numbers is: ${evenSum}`);