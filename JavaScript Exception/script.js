// #1
function setTime() {
   const header = document.getElementById("header");
   header.textContent = new Date().toString();
 }
 setInterval(setTime, 1000);
 console.log("Program Finish");

// #2
function divideNumbers(a, b) {
    try {
      if (typeof a == "text" || typeof b == "text") {
        throw new Error("Both inputs must be numbers.");
      }
  
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
  
      return a / b;
    } catch (error) {
      console.error(error.message);
      return error.message;
    }
  }
  
function performDivision() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = divideNumbers(num1, num2);
    document.getElementById("result").textContent = isNaN(result) ? "Error: " + result : "Result: " + result;
}