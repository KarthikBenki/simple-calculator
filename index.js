// Get the calculator screen element
const screen = document.getElementById("screen");

// Get all the number buttons
const numberButtons = document.querySelectorAll(".number");

// Get the clear button
const clearButton = document.getElementById("clear-screen");

// Get the equals button
const equalsButton = document.getElementById("equals");

// Add event listeners to number buttons
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    screen.textContent += number;
  });
});

// Add event listener to clear button
clearButton.addEventListener("click", () => {
  screen.textContent = "";
});

// Add event listener to equals button
equalsButton.addEventListener("click", calculate);

// Function to perform the calculation
function calculate() {
  const expression = screen.textContent;
  let result;

  try {
    result = eval(expression);
    screen.textContent = result;
  } catch (error) {
    screen.textContent = "Error";
  }
}
