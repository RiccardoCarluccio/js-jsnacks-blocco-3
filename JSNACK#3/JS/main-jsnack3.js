const BTN_GET_ARRAY = document.getElementById("btn-get-array");
const n = document.getElementById("user-array");
const ARRAY_OF_NUMBERS = [];

//TEST VARs
console.log(`n is: ${n}`);

BTN_GET_ARRAY.addEventListener('click', function arrayGenerator() {
  const NUMBERS_OF_ARRAYS = n.value;
  //TEST ARRAY QUANTITY
  console.log(`NUMBERS_OF_ARRAYS is: ${NUMBERS_OF_ARRAYS}`);

  for (let i = 0; i < parseInt(NUMBERS_OF_ARRAYS); i++) {

    //CREATES ARRAY CONTENT
    for (i = 0; i < 10; i++) {
      ARRAY_OF_NUMBERS.push(Math.floor(Math.random() * 101));
    }
    console.log(`The array #${parseInt(NUMBERS_OF_ARRAYS)} is ${ARRAY_OF_NUMBERS}`);
  }
})

//chiaramente aggiunge ogni volta valori all'array, perchè è una const globale

//ma l'array #userInput in realtà è sempre lo stesso