import { questionsJSHabr } from "./modules/question_JS_Data.js";
import { questionsJSProglib } from "./modules/question_JS_Data.js";
import { questionJavaScript } from "./modules/question_JS_Data.js";
import { questionsJSHabr35 } from "./modules/question_JS_Data.js";

import { questionCSS } from "./modules/questions_CSS_Data.js";

import accordionCard from "./modules/accordionCard.js";
import displayQuestion from "./modules/displayQuestions.js";
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

  // Render questions to the page
  // const questionHabr = document.querySelector(".habrOne__container");
  // if (document.querySelector(".habrOne__container")) {
  //   questionsJSHabr.forEach((question) => {
  //     accordionCard(question, questionHabr);
  //   });
  // }
  const questionProglib = document.querySelector(".proglib__container");
  if (document.querySelector(".proglib__container")) {
    questionsJSProglib.forEach((question) => {
      accordionCard(question, questionProglib);
    });
  }
  const questionHabr35 = document.querySelector(".habr35__container");
  if (document.querySelector(".habr35__container")) {
    questionsJSHabr35.forEach((question) => {
      accordionCard(question, questionHabr35);
    });
  }

  // random question test
  if (document.querySelector(".tests__modal")) {
    document.querySelector("#exampleModalToggleLabel").textContent = "Вопрос";
    document.querySelector(".btn-primary").textContent = "Показать ответ";
    document.querySelector("#exampleModalToggleLabel2").textContent = "Ответ";

    // add btn name
    document.querySelector("#randomJavascript").textContent =
      "Случайный вопрос по JavaScript";
    document.querySelector("#javascript").textContent =
      "Случайная задача по JavaScript";
    document.querySelector("#randomCSS").textContent =
      "Случайный вопрос по CSS";

    // random javascript question
    document
      .querySelector("#randomJavascript")
      .addEventListener("click", () => {
        displayQuestion(questionJavaScript, "question", "answer");
      });

    // random css question
    document.querySelector("#randomCSS").addEventListener("click", () => {
      displayQuestion(questionCSS, "question", "answer");
    });
  }
});
