const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
  // if btn has been clicked increase by 1
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;

  // printout message
  console.log("increase has been clicked");
};

decrease.onclick = () => {
  // if btn has been clicked decrease by 1
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;

  // printout message
  console.log("decrease has been clicked");
};
