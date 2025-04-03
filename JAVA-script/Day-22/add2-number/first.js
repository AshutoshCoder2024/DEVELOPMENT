const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  // read number

  const input1 = document.getElementById("first");
  const number1 = Number(
    input1.value
  ); /* here we use number because in input is in form of string amnd the NUmber convert it into number  */
  const input2 = document.getElementById("second");
  const number2 = Number(input2.value);

  // const number2= Number(document.getElementsByClassName('second').value);

  // check the input is corrct
  if (isNaN(number1) || isNaN(number2)) return;

  //  output the result

  const result = number1 + number2;
  const re = document.getElementById("Result");
  re.textContent = "Result:" + result;
});
