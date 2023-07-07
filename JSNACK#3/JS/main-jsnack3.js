const BTN_GET_ARRAY = document.querySelector("user-array");
const n = document.getElementById("user-array");
const ARRAY_OF_NUMBERS = [];

BTN_GET_ARRAY.addEventListener('click', function arrayGenerator() {
  for (i = 0; i === n; i++) {
    
    //CREATES ARRAY CONTENT
    for (i = 0; i < 11; i++) {
      ARRAY_OF_NUMBERS.push(Math.floor(Math.random() * 101));
    }
    console.log(`The array #${i} is ${ARRAY_OF_NUMBERS}`);
  }
})