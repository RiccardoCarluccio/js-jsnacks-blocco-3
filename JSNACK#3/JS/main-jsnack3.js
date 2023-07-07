const BTN_GET_ARRAY = document.getElementById("btn-get-array");
const n = document.getElementById("user-array");
let TEN_ELEMENTS_ARRAY = [];

//TEST VARs
console.log(`n is: ${n}`);

BTN_GET_ARRAY.addEventListener('click', function arrayGenerator() {
  const NUMBERS_OF_ARRAYS = n.value;
  //TEST PREVIOUS CONST
  console.log(`User input and NUMBERS_OF_ARRAYS are both: ${NUMBERS_OF_ARRAYS}`);

  for (let i = 0; i < parseInt(NUMBERS_OF_ARRAYS); i++) {
    TEN_ELEMENTS_ARRAY = [];

    //CREATES ARRAY CONTENT
    for (i = 0; i < 10; i++) {
      TEN_ELEMENTS_ARRAY.push(Math.floor(Math.random() * 101));
    }

    console.log(`The array #${NUMBERS_OF_ARRAYS} is ${TEN_ELEMENTS_ARRAY}`);
  }
})

//l'output è un solo array e non in numero indicato dall'utente