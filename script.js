const txtInput = document.querySelector("#txt-input");
const translateBtn = document.querySelector("#translate-btn");
const outputBox = document.querySelector("#output");

const apiUrl =
  "https://api.funtranslations.com/translate/shakespeare.json?text=";

function translateTolang() {
  let text = txtInput.value;
  let url = apiUrl + text;
  getTranslionOfshakes(url);
}
function getTranslionOfshakes(url) {
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      outputBox.innerHTML = result.contents.translated;
    })
    .catch(() => {
      alert("Request exceed or something wrong. Try after sometimes");
    });
}

translateBtn.addEventListener("click", translateTolang);
