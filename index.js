//"use strict";
//import "./style.css";

var altLanguages = {
  en: {
    firstText: "CONTACT",
  },
  pl: {
    firstText: "KONTAKT",
  },
};

const selectElement = document.getElementById("languages-dropdown");
console.log(selectElement);

function onLoadPage() {
  if (window.location.hash) {
    if (window.location.hash === "#pl") {
      selectElement.value = "pl";
    } else if (window.location.hash === "#en") {
      selectElement.value = "en";
    }
  }
}

window.onload = onLoadPage;

selectElement?.addEventListener("change", (event) => {
  window.location.hash = event.target.value;
  location.reload(true);
});

var elementsToTranslate = document.querySelectorAll("[translated-text]");
console.log(elementsToTranslate);
var enHash = "#en";
var currentHash = window.location.hash;
if (window.location.hash && currentHash === enHash) {
  elementsToTranslate.forEach(function (element) {
    console.log(element.id);
    element.textContent = altLanguages["en"][element.id];
  });
}
