function addCssQuestions(question, container) {
  //  add accordionContainer
  const accordionContainer = document.createElement("div");
  accordionContainer.classList.add("accordion", "accordion-flush");
  accordionContainer.setAttribute("id", `accordionFlushExample`);
  accordionContainer.setAttribute("data-category", `${question.category}`);
  accordionContainer.style.boxShadow = "0px 3px 5px 0px rgba(0, 0, 0, 0.51)";
  container.appendChild(accordionContainer);

  // add accordion-item
  const accordionCard = document.createElement("div");
  accordionCard.classList.add("accordion-item");
  // accordionCard.style.display = "block !important";
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
    "text-left",
    "fs-4"
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
  accordionCardCollapse.id = `flush-collapse${question.id}`;
  accordionCardCollapse.classList.add("accordion-collapse", "collapse");
  accordionCard.appendChild(accordionCardCollapse);

  // add card-body
  const accordionCardBody = document.createElement("div");
  accordionCardBody.classList.add("accordion-body");

  accordionCardCollapse.appendChild(accordionCardBody);
  accordionCardBody.style.backgroundColor = "#FFFAF0";

  // add answer1
  const answerItem = document.createElement("div");
  answerItem.classList.add("answer", "fs-5");
  answerItem.innerHTML = question.answer;

  accordionCardBody.appendChild(answerItem);
}

export default addCssQuestions;
