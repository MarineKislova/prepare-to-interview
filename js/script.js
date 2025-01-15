import { questionsJSHabr } from "./modules/question_JS_Data.js";
import { questionsJSProglib } from "./modules/question_JS_Data.js";

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

  // // Remove accordion-item with empty answer
  // const accordionItems = document.querySelectorAll(".accordion-item");
  // accordionItems.forEach((item) => {
  //   const answer = item.querySelector(
  //     ".accordion-collapse.show + .accordion-body"
  //   );
  //   if (!answer.textContent.trim()) {
  //     item.parentNode.removeChild(item);
  //   }
  // });

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

  // randon question test

  const randomQuestionButton = document.querySelector(
    "#random-question-button"
  );
  if (document.querySelector("#random-question-button")) {
    randomQuestionButton.addEventListener("click", () => {
      const randomQuestionIndex = Math.floor(
        Math.random() * (questionsJSHabr.length + questionsJSProglib.length)
      );
      const randomQuestion =
        questionsJSHabr[randomQuestionIndex] ||
        questionsJSProglib[randomQuestionIndex];

      // // render question to the page
      // accordionCard(
      //   randomQuestion,
      //   document.querySelector(".modal-window__test")
      // );

      document.querySelector(".modal-window__test").textContent = randomQuestion.question.answer;
    });
  }

  popUpWindow({
    openSelector: "[data-openmodal]",
    closeSelector: "[data-closemodal]",
    parentSelector: ".modal-window",
  });
});
