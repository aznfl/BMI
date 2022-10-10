const result = () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const icon = document.getElementsByClassName("icon")[0];
  const resultBmi = document.getElementById("resultBmi");
  const resultMeans = document.getElementById("resultMeans");

  if (isNaN(weight) || isNaN(height)) {
    alert("You Have Not Entered Data");
    return;
  } else {
    // confirm("Apakah sudah benar?");
    const calculate = weight / (height / 100) ** 2;
    if (calculate < 18.5) {
      resultMeans.innerHTML = "Underweight";
      icon.innerHTML = '<i class="ri-error-warning-line warning"></i>';
      resultBmi.classList.add("warningBg");
      resultMeans.classList.add("warningBg");
    } else if (calculate >= 18.5 && calculate <= 24.9) {
      resultMeans.innerHTML = "Normal Weight";
      icon.innerHTML = '<i class="ri-checkbox-circle-line normal"></i>';
      resultBmi.classList.add("normalBg");
      resultMeans.classList.add("normalBg");
    } else if (calculate >= 25 && calculate <= 29.9) {
      resultMeans.innerHTML = "Overweight";
      icon.innerHTML = '<i class="ri-error-warning-line warning"></i>';
      resultBmi.classList.add("warningBg");
      resultMeans.classList.add("warningBg");
    } else if (calculate >= 30) {
      resultMeans.innerHTML = "Obesity";
      icon.innerHTML = '<i class="ri-close-circle-line danger"></i>';
      resultBmi.classList.add("dangerBg");
      resultMeans.classList.add("dangerBg");
    }
    resultBmi.innerHTML = calculate.toFixed(1);
  }
  formResult();
};

let isOpened = false;
const formResult = () => {
  const resultPage = document.getElementsByClassName("resultPage")[0];

  if (isOpened) {
    resultPage.classList.remove("display");
    isOpened = false;
  } else {
    resultPage.classList.add("display");
    isOpened = true;
  }
};

document.getElementById("calculateBtn").addEventListener("click", result);
document.getElementById("resultBtn").addEventListener("click", formResult);
