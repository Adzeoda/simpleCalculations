function solveSum(event) {
    event.preventDefault(); // Prevent form submission if it's in a form

    // Get values from the input fields
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    // Check for valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sumResult").innerText = "Please enter valid numbers.";
        return;
    }

    // Add the numbers
    const sum = num1 + num2;

    // Display the result
    document.getElementById("sumResult").innerText = "Sum: " + sum;
}

function clearvalues() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("sumResult").innerText = "";
}



function solveDivision(event) {
    event.preventDefault(); // Prevents form from submitting and refreshing the page

    const num1 = parseFloat(document.getElementById("divNum1").value);
    const num2 = parseFloat(document.getElementById("divNum2").value);
    const resultElement = document.getElementById("divResult");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please enter valid numbers.";
        return;
    }

    if (num2 === 0) {
        resultElement.innerText = "Cannot divide by zero!";
        return;
    }

    const result = num1 / num2;
    resultElement.innerText = "Results: " + result;
}

function clearvalues() {
    document.getElementById("divNum1").value = "";
    document.getElementById("divNum2").value = "";
    document.getElementById("divResult").innerText = "";
}



function solveMultiplication(event) {
    event.preventDefault(); // Prevents the form from submitting

    const num1 = parseFloat(document.getElementById("multNum1").value);
    const num2 = parseFloat(document.getElementById("multNum2").value);
    const resultElement = document.getElementById("mulResults");

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerText = "Please enter valid numbers.";
        return;
    }

    const result = num1 * num2;
    resultElement.innerText = "Multiplication Result: " + result;
}

function clearvalues() {
    document.getElementById("multNum1").value = "";
    document.getElementById("multNum2").value = "";
    const resultElement = document.getElementById("mulResults");
    if (resultElement) resultElement.innerText = "";
}

function solveSubtraction(event) {
  event.preventDefault(); // Prevents the form from refreshing the page

  const num1 = parseFloat(document.getElementById("subNum1").value);
  const num2 = parseFloat(document.getElementById("subNum2").value);
  const resultElement = document.getElementById("subResults");

  if (isNaN(num1) || isNaN(num2)) {
    resultElement.innerText = "Please enter valid numbers.";
    return;
  }

  const result = num1 - num2;
  resultElement.innerText = "Subtraction Result: " + result;
}

function clearvalues() {
  document.getElementById("subNum1").value = "";
  document.getElementById("subNum2").value = "";
  const resultElement = document.getElementById("subResults");
  if (resultElement) resultElement.innerText = "";
}