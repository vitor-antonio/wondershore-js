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

const buttons = document.querySelectorAll("[flag-button]");

buttons.forEach(element => {
  element.addEventListener("click", (event) => {
    const language = event.target.id.replace('lang-', '');
    window.location.hash = language;
    location.reload(true);
  })
});

//const selectElement = document.getElementById("languages-dropdown");

// function onLoadPage() {
//   if (window.location.hash) {
//     if (window.location.hash === "#pl") {
//       selectElement.value = "pl";
//     } else if (window.location.hash === "#en") {
//       selectElement.value = "en";
//     }
//   }
// }

// window.onload = onLoadPage;

// selectElement?.addEventListener("change", (event) => {
//   window.location.hash = event.target.value;
//   location.reload(true);
// });

var elementsToTranslate = document.querySelectorAll("[translated-text]");
var enHash = "#en";
var currentHash = window.location.hash;
if (window.location.hash && currentHash === enHash) {
  elementsToTranslate.forEach(function (element) {
    element.textContent = altLanguages["en"][element.id];
  });
}


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (element, dividend = 1) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});