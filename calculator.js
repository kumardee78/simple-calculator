const btns = document.querySelectorAll("button");
const inputValue = document.querySelector("input");

let string = "";
inputValue.value = 'calculate...'

btns.forEach((button) => {
  button.addEventListener("click", operator);
});

function operator(e) {
  e.target.classList.add("hover");
  if (e.target.innerText == "=") {
    string = String(eval(string));
    inputValue.value = string;
  } else if (e.target.innerText == "AC") {
    string = "";
    inputValue.value = string;
  } else if (e.target.innerText === "Del") {
    string = string.substring(0, string.length - 1);
    inputValue.value = string;
  } else {
    string += e.target.innerText;
    inputValue.value = string;
  }
}
