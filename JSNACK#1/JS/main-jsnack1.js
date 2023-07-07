const BTN_GET_NUM = document.querySelector(".btn-get-num");
const USER_NUM = document.getElementById("user-num");
let userSum;

//TEST ROUTINE #1
console.log(`USER_NUM is: ${USER_NUM}`);
console.log(USER_NUM);
console.log(`userSum is: ${userSum}`);
//END TEST ROUTINE #1

BTN_GET_NUM.addEventListener('click', function addNum() {
  const ADDED_NUM = USER_NUM.value;
  //TEST PRREVIOUS CONST
  console.log(ADDED_NUM);

  userSum += ADDED_NUM;

  console.log(userSum);
})