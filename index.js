//"use strict";
//import "./style.css";

var altLanguages = {
  pl: {
    firstText: "KONTAKT",
    secondText:
      "to marka, której misją jest budowanie świadomości klienta w oparciu o dostarczanie najwyższej jakości produktów pochodzących głównie z Polski. To polscy producenci, projektanci oraz twórcy są liderami wyróżniającymi się na tle całej Europy pod kątem oferowania najwyższej jakości projektów materiałów użytkowych i dekoracyjnych.",
    thirdText:
      "Nasza platformaziałająca na rynku skandynawskim to nie tylko  sklep internetowy, to również źródło informacji oraz inspiracji na temat designu i wykończenia wnętrz.",
    fourthText:
      "Jednym z kluczowych zadań, które sobie stawiamy jest tworzenie społeczności osób, które stanowić będą naturalne grono ambasadorów portfolio oferowanych produktów.",
    fifthText:
      "Kierujemy się podejściem indywidualnym do realizacji potrzeb każdego klienta. Jesteśmy przekonani, że odpowiednie wykończenie wnętrz stanowi klucz do zapewnienia harmonii w codziennym życiu każdego z nas.",
    sixthText:
      "Zapraszamy do współpracy producentów, z którymi wspólnie będziemy budować ofertę poprzez naszą platformę e-commerce.",
  },
  en: {
    firstText: "CONTACT",
    secondText:
      "is the brand whose mission is to build customer’s awareness by providing the highest quality products mainly from Poland.  These are the Polish manufacturers, designers, and creators who are the leaders standing out in Europe when it comes to offering the highest quality designs of functional and decorative materials.",
    thirdText:
      "Our platform operating on the Scandinavian market is not only the online store, but also a source of information and inspiration about a design and an interior arrangement.",
    fourthText:
      "One of the key task that we set ourselves is to create a community of people who will be a natural group of ambassadors for the portfolio of the offered products.",
    fifthText:
      "We are focused on an individual approach to fulfill at the needs of every customer. We are convinced that the appropriate interior design is the key to ensure a harmony in the daily life of each of us.",
    sixthText:
      "We invite manufacturers to cooperate with us to build an offer through our e-commerce platform.",
  },
};

const buttons = document.querySelectorAll("[flag-button]");

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const language = event.target.id.replace("lang-", "");
    window.location.hash = language;
    location.reload(true);
  });
});

buttons.forEach((element) => {
  element.addEventListener("click", (event) => {
    const language = event.target.id.replace("lang-", "");
    window.location.hash = language;
    location.reload(true);
  });
});

document.getElementById("firstText").addEventListener("click", (event) => {
  var element = document.getElementById("footer-element");
  element.scrollIntoView({ behavior: "smooth", block: "end" });
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
    // element.textContent = altLanguages["en"][element.id];
    element.innerHTML = altLanguages["en"][element.id];
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
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
