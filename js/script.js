import questionsJavaScript from "./modules/question_JS_Data.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const questionHabr = document.querySelector(".habrOne__container");
  const accordionContainer = document.querySelector("#accordionFlushExample");

  function accordionCard(question) {
    // add accordion-item
    const accordionCard = document.createElement("div");
    accordionCard.classList.add("accordion-item");
    accordionContainer.appendChild(accordionCard);

    // add h2 class accordion-header
    const accordionCardHeader = document.createElement("h2");
    accordionCardHeader.classList.add(
      "accordion-header",
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    accordionCard.appendChild(accordionCardHeader);

    // add button class accordion-button collapsed
    const accordionCardButton = document.createElement("button");
    accordionCardButton.classList.add(
      "accordion-button",
      "collapsed",
      "w-100",
      "text-left"
    );
    accordionCardButton.setAttribute("data-bs-toggle", "collapse");
    accordionCardButton.setAttribute(
      "data-bs-target",
      `#flush-collapse${question.id}`
    );
    accordionCardButton.setAttribute("aria-expanded", "false");
    accordionCardButton.setAttribute(
      "aria-controls",
      `flush-collapse${question.id}`
    );
    accordionCardButton.innerHTML = `${question.id}. ${question.question}`;
    accordionCardHeader.appendChild(accordionCardButton);

    

    // add accordion-collapse collapse
    const accordionCardCollapse = document.createElement("div");
    accordionCardCollapse.classList.add("accordion-collapse", "collapse");
    accordionCardCollapse.id = `flush-collapse${question.id}`;
    accordionCard.appendChild(accordionCardCollapse);

    // add card-body
    const accordionCardBody = document.createElement("div");
    accordionCardBody.classList.add("accordion-body");
    accordionCardCollapse.appendChild(accordionCardBody);
    // accordionCardBody.style.display = "flex";
    // accordionCardBody.style.flexDirection = "column";

    // add answer1
    const answerItem1 = document.createElement("div");
    const answerItemText1 = document.createElement("p");
    answerItemText1.textContent = question.answer.answer1;
    const link1 = document.createElement("a");
    link1.target = "_blank";
    link1.href = question.answer.href;
    link1.textContent = question.answer.linkName;
    answerItem1.appendChild(link1);
    answerItem1.appendChild(answerItemText1);
    accordionCardBody.appendChild(answerItem1);
    // add underline and bold style to answer1
    link1.style.textDecoration = "underline";
    link1.style.color = "red";
    link1.style.fontWeight = "bold";

    // add answer2
    const answerItem2 = document.createElement("div");
    const answerItemText2 = document.createElement("p");
    answerItemText2.textContent = question.answer.answer2;
    const link2 = document.createElement("a");
    link2.target = "_blank";
    link2.href = question.answer.href2;
    link2.textContent = question.answer.linkName2;
    answerItem2.appendChild(link2);
    answerItem2.appendChild(answerItemText2);
    accordionCardBody.appendChild(answerItem2);
    // add underline and bold style to answer2
    link2.style.textDecoration = "underline";
    link2.style.color = "blue";
    link2.style.fontWeight = "bold";

    if(question.answer.answer2 == "") {
        accordionCardBody.removeChild(answerItem2);
    }
  }

  // Render questions to the page
  questionsJavaScript.forEach((question) => {
    accordionCard(question);
  });
});
