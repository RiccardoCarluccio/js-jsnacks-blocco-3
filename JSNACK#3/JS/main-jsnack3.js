const BTN_GET_ARRAY = document.getElementById("btn-get-array");
const n = document.getElementById("user-array");
const ARRAY_OF_NUMBERS = [];

//TEST VARs
console.log(`n is: ${n}`);

BTN_GET_ARRAY.addEventListener('click', function arrayGenerator() {
  const ARRAY_QUANTITY = n.value;
  //TEST ARRAY QUANTITY
  console.log(`ARRAY_QUANTITY is: ${ARRAY_QUANTITY}`);

  for (let i = 0; i < parseInt(ARRAY_QUANTITY); i++) {

    //CREATES ARRAY CONTENT
    for (i = 0; i < 11; i++) {
      ARRAY_OF_NUMBERS.push(Math.floor(Math.random() * 101));
    }
    console.log(`The array #${parseInt(ARRAY_QUANTITY)} is ${ARRAY_OF_NUMBERS}`);
  }
})