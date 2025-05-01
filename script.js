// first div accordion
const firstAccordionTrigger = document.querySelector(
  ".accordion-trigger-first"
);
const firstAccordionContent = document.querySelector(
  ".accordion-content-first"
);
const firstAccordionIcon = document.querySelector(".first-img");
//second div accordion
const secondAccordionTrigger = document.querySelector(
  ".accordion-trigger-second"
);
const secondAccordionContent = document.querySelector(
  ".accordion-content-second"
);
const secondAccordionIcon = document.querySelector(".second-img");
// third div accordion
const thirdAccordionTrigger = document.querySelector(
  ".accordion-trigger-third"
);
const thirdAccordionContent = document.querySelector(
  ".accordion-content-third"
);
const thirdAccordionIcon = document.querySelector(".third-img");
// fourth div accordion
const fourthAccordionTrigger = document.querySelector(
  ".accordion-trigger-fourth"
);
const fourthAccordionContent = document.querySelector(
  ".accordion-content-fourth"
);
const fourthAccordionIcon = document.querySelector(".fourth-img");

let firstAccordionIsOpen = false;
// first div accordion
const handleFirstAccordion = () => {
  if (firstAccordionIsOpen === false) {
    firstAccordionIsOpen = true;
    // open accordion
    firstAccordionContent.classList.remove("hide");

    const currentIconSource = firstAccordionIcon.getAttribute("src");
    firstAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("plus", "minus")
    );
  } else {
    firstAccordionIsOpen = false;

    // close accordion
    firstAccordionContent.classList.add("hide");

    const currentIconSource = firstAccordionIcon.getAttribute("src");
    firstAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("minus", "plus")
    );
  }
};
firstAccordionTrigger.addEventListener("click", handleFirstAccordion);

// second div accordion
const handleSecondAccordion = () => {
  if (firstAccordionIsOpen === false) {
    firstAccordionIsOpen = true;

    secondAccordionContent.classList.remove("hide");
    const currentIconSource = secondAccordionIcon.getAttribute("src");
    secondAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("plus", "minus")
    );
  } else {
    firstAccordionIsOpen = false;
    secondAccordionContent.classList.add("hide");
    const currentIconSource = secondAccordionIcon.getAttribute("src");
    secondAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("minus", "plus")
    );
  }
};
secondAccordionTrigger.addEventListener("click", handleSecondAccordion);
// third div accordion
const handleThirdAccordion = () => {
  if (firstAccordionIsOpen === false) {
    firstAccordionIsOpen = true;
    thirdAccordionContent.classList.remove("hide");
    const currentIconSource = thirdAccordionIcon.getAttribute("src");
    thirdAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("plus", "minus")
    );
  } else {
    firstAccordionIsOpen = false;
    thirdAccordionContent.classList.add("hide");
    const currentIconSource = thirdAccordionIcon.getAttribute("src");
    thirdAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("minus", "plus")
    );
  }
};

thirdAccordionTrigger.addEventListener("click", handleThirdAccordion);
// fourth div accordion
const handleFourthAccordion = () => {
  if (firstAccordionIsOpen === false) {
    firstAccordionIsOpen = true;
    fourthAccordionContent.classList.remove("hide");
    const currentIconSource = fourthAccordionIcon.getAttribute("src");
    fourthAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("plus", "minus")
    );
  } else {
    firstAccordionIsOpen = false;
    fourthAccordionContent.classList.add("hide");
    const currentIconSource = fourthAccordionIcon.getAttribute("src");
    fourthAccordionIcon.setAttribute(
      "src",
      currentIconSource.replace("minus", "plus")
    );
  }
};
fourthAccordionTrigger.addEventListener("click", handleFourthAccordion);
