const BTN_GET_NUM = document.querySelector(".btn-get-num");
const USER_NUM = document.getElementById("user-num");
let userSum = 0;

//TEST PREVIOUS VARIABLES
console.log(`USER_NUM is: ${USER_NUM}`);
console.log(USER_NUM);
console.log(`userSum is: ${userSum}`);
//END TEST

BTN_GET_NUM.addEventListener('click', function addNum() {
  const ADDED_NUM = USER_NUM.value;
  //TEST PREVIOUS CONST
  console.log(`ADDED_NUM = USER_NUM.value is: ${ADDED_NUM}`);

  if (userSum <= 50) {
    userSum += parseInt(ADDED_NUM);
  } else {
    console.log(`The sum reached: ${userSum}`)
  }

  //TEST FINAL SUM
  console.log(`userSum += ADDED_NUM is: ${userSum}`);
})

//non ho fatto caso alla richiesta di array. a fine jsnack#3 tornerò a completare la consegna