const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  const result = document.querySelector(".result");
  const bmi = (Weight/ (height*height)*10000).toFixed(2);
  result.innerHTML=`<h1>Result = ${bmi}</h1>`;

});