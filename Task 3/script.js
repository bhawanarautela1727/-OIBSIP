function convertTemp() {
  const degrees = parseFloat(document.getElementById("degrees").value);
  const type = document.getElementById("type").value;
  const resultEl = document.getElementById("result");

  if (isNaN(degrees)) {
    resultEl.textContent = "Invalid input";
    return;
  }

  let result;
  if (type === "fahrenheit") {
    result = ((degrees - 32) * 5 / 9).toFixed(2) + " °C";
  } else {
    result = ((degrees * 9 / 5) + 32).toFixed(2) + " °F";
  }

  resultEl.textContent = result;
}


