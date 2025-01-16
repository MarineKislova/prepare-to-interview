import { questionsJSHabr } from "./modules/question_JS_Data.js";
import { questionsJSProglib } from "./modules/question_JS_Data.js";
import { questionJavaScript } from "./modules/question_JS_Data.js";

import accordionCard from "./modules/accordionCard.js";
import popUpWindow from "./modules/popUp.js";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  //active nav-item
  // Текущий URL с учетом хэша
  const currentPage = window.location.href;

  // Находим все ссылки в меню
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Перебираем все ссылки
  navLinks.forEach((link) => {
    // Сравниваем href ссылки с текущим URL
    if (link.href === currentPage) {
      // Удаляем класс active у всех ссылок
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // Добавляем класс active к текущей
      link.classList.add("active");
      if (link.classList.contains("active")) {
        link.style.color = "#15e7b3";
      }
    }
  });

  // Remove accordion-item with empty answer
  const accordionItems = document.querySelectorAll(".accordion-item");
  accordionItems.forEach((item) => {
    const answer = item.querySelector(
      ".accordion-collapse.show + .accordion-body"
    );
    if (!answer.textContent.trim()) {
      item.parentNode.removeChild(item);
    }
  });

  // Render questions to the page
  const questionHabr = document.querySelector(".habrOne__container");
  if (document.querySelector(".habrOne__container")) {
    questionsJSHabr.forEach((question) => {
      accordionCard(question, questionHabr);
    });
  }
  const questionProglib = document.querySelector(".proglib__container");
  if (document.querySelector(".proglib__container")) {
    questionsJSProglib.forEach((question) => {
      accordionCard(question, questionProglib);
    });
  }

  // random question test

  const randomQuestionBtn = document.querySelector(
    "#random-question-javascript"
  );

  randomQuestionBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * questionsJSProglib.length);
    const randomQuestion = questionJavaScript[randomIndex].question;
    const randomAnswer1 = questionJavaScript[randomIndex].answer.answer1;
    const randomAnswer2 = questionJavaScript[randomIndex].answer.answer2;
    const randomAnswer3 = questionJavaScript[randomIndex].answer.answer3;
    const modalQuestion = document.querySelector("#question");
    const modalAnswer = document.querySelector("#answer");

    modalQuestion.textContent = randomQuestion;
    modalAnswer.innerHTML = `<p class="answer-text" data-answer="${randomAnswer1}"> <span> Ответ 1: </span> ${randomAnswer1} </p> 
    <p class="answer-text" data-answer="${randomAnswer2}"> <span> Ответ 2: </span> ${randomAnswer2}</p>
    <p class="answer-text" data-answer="${randomAnswer3}"> <span> Ответ 3: </span> ${randomAnswer2}</p>`;
  });

  
});
