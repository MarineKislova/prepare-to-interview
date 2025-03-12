// import questions JS
import { questionsJSProglibPart1 } from "./modules/question_JS_Data.js";
import { questionsJSProglibPart2 } from "./modules/question_JS_Data.js";
import { questionsJSProglib10 } from "./modules/question_JS_Data.js";
import { questionsJSTproger30 } from "./modules/question_JS_Data.js";
import { questionsJSHabrPart1 } from "./modules/question_JS_Data.js";
import { questionsJSHabrPart2 } from "./modules/question_JS_Data.js";
import { questionsJSHabr35 } from "./modules/question_JS_Data.js";
import { questionsJSHabr } from "./modules/question_JS_Data.js";
import { questionsJS } from "./modules/questions_comon_JS_Data.js";

// import { questionJavaScript } from "./modules/question_JS_Data.js";
// import { commonList } from "./modules/question_JS_Data.js";

// import questions css
import { questionCSS } from "./modules/questions_CSS_Data.js";

// import questions html

// import questions articles
import { articlesFromWeb } from "./modules/articles_Data.js";

// import functions for displaying questions and articles
import accordionCard from "./modules/accordionCard.js";
import displayQuestion from "./modules/displayQuestions.js";
import filter from "./modules/filter.js";
import addArticles from "./modules/addArticles.js";
import zoomImage from "./modules/zoomImage.js";
import addCssQuestions from "./modules/addCssQuestions.js";
import tabs from "./modules/tabs.js";

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
        link.style.color = "#fa6060";
        link.style.borderBottom = "2px solid #fa6060";
      }
    }
  });

  //tabs on pages with questions
  if (document.querySelector(".tab-js")) {
    tabs({
      selectorContent: "[data-js]",
      selectorTab: ".tab-js__btn-js",
      selectorParent: ".tab-js__container",
      activeClass: "btn-js-active",
    });
  }

  //add button toUp
  const questionContainers = document.querySelectorAll(".accordion-item");

  function addUpBtn(container) {
    const upBtn = document.createElement("button");
    upBtn.classList.add("btn", "btn-outline-secondary", "btnUp");
    upBtn.textContent = "Наверх к разделу";
    // upBtn.style.maxWidth = 220 + "px";
    // upBtn.style.alignSelf = "center"
    container.appendChild(upBtn);

    upBtn.addEventListener("click", () => {
      const title = container.querySelector(".questions__tittle");
      if (title) {
        title.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  // Add the buttons "Up to the section" for each container
  questionContainers.forEach((container) => {
    addUpBtn(container);
  });

  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.closest(".accordion-item");
      const upButton = container ? container.querySelector(".btnUp") : null;

      // Check if there is a button
      if (btn.classList.contains("collapsed")) {
        // if the Aquardeon button "Closed"
        if (upButton) {
          upButton.style.display = "none";
        }
      } else {
        // If the Aquardeon button "Open"
        if (upButton) {
          upButton.style.display = "block";
        }
      }
    });
  });

  // Render questions to the page

  //js common questions
  const questionJSList = document.querySelector(".common-questions__list");
  function renderJSQuestions(questions) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = `${questions.id}. ${questions.question}`;
    questionJSList.appendChild(li);
  }
  questionsJS.forEach((questions) => {
    renderJSQuestions(questions);
  });

  //js common questions with answers
  const questionJSAnswerList = document.querySelector(".common-answers__list");
  function renderJSAnswerQuestions(questions) {
    const li = document.createElement("li");
    li.classList.add("common-answers__list-item");
    // li.innerHTML = `<p>></p>`;
    questionJSAnswerList.appendChild(li);

    const questionText = document.createElement("div");
    questionText.classList.add("common-answers__question", "fs-5");
    questionText.innerHTML = `<span>${questions.id}. ${questions.question}</span>`;
    li.appendChild(questionText);

    const answerItem1 = document.createElement("div");
    answerItem1.classList.add("common-answers__answer1", "fs-5");
    answerItem1.innerHTML = `<span>Ответ 1:</span> ${questions.answer.answer1}`;
    li.appendChild(answerItem1);

    const answerItem2 = document.createElement("div");
    answerItem2.classList.add("common-answers__answer2", "fs-5");
    answerItem2.innerHTML = `<span>Ответ 2:</span> ${questions.answer.answer2}`;
    li.appendChild(answerItem2);

    const answerItem3 = document.createElement("div");
    answerItem3.classList.add("common-answers__answer3", "fs-5");
    answerItem3.innerHTML = `<span>Ответ 3:</span> ${questions.answer.answer3}`;
    li.appendChild(answerItem3);

    const answerItem4 = document.createElement("div");
    answerItem4.classList.add("common-answers__answer4", "fs-5");
    answerItem4.innerHTML = `<span>Ответ 4:</span> ${questions.answer.answer4}`;
    li.appendChild(answerItem4);

    if (questions.answer.answer2 == "") {
      answerItem2.style.display = "none";
    }
    if (questions.answer.answer3 == "") {
      answerItem3.style.display = "none";
    }
    if (
      questions.answer.answer4 == "" ||
      questions.answer.answer4 == undefined
    ) {
      answerItem4.style.display = "none";
    }
  }
  questionsJS.forEach((questions) => {
    renderJSAnswerQuestions(questions);
  });

  //js questions cards with answers
  const questionJSAccordionList = document.querySelector(".accordion-js__list");
  function renderJSQuestionCards(questions) {
    const accordionCard = document.createElement("div");
    accordionCard.classList.add("accordion-card");
    questionJSAccordionList.appendChild(accordionCard);

    const btn = document.createElement("button");
    btn.classList.add("accordion");
    btn.innerHTML = `<h2>${questions.id}. ${questions.question}</h2>`;
    accordionCard.appendChild(btn);

    const panel = document.createElement("div");
    panel.classList.add("panel");
    panel.innerHTML = `<div class="back-content"><h3>Ответы:</h3><p>Ответ 1: ${questions.answer.answer1}</p></div>`;
    accordionCard.appendChild(panel);
  }

  questionsJS.forEach((questions) => {
    renderJSQuestionCards(questions);
  });

  const acc = document.getElementsByClassName("accordion");
  

  //js questions
  const questionJS = document.querySelector(".common-questionsJS-container");
  if (questionJS) {
    questionsJS.forEach((question) => {
      accordionCard(question, questionJS);
    });
  }

  const questionProglibPart1 = document.querySelector(".proglib-P1-container");
  if (document.querySelector(".proglib-P1-container")) {
    questionsJSProglibPart1.forEach((question) => {
      accordionCard(question, questionProglibPart1);
    });
  }

  const questionProglibPart2 = document.querySelector(".proglib-P2-container");
  if (document.querySelector(".proglib-P2-container")) {
    questionsJSProglibPart2.forEach((question) => {
      accordionCard(question, questionProglibPart2);
    });
  }

  const questionProglib10 = document.querySelector(".proglib-10-container");
  if (document.querySelector(".proglib-10-container")) {
    questionsJSProglib10.forEach((question) => {
      accordionCard(question, questionProglib10);
    });
  }

  const questionTproger30 = document.querySelector(".tproger-30-container");
  if (document.querySelector(".tproger-30-container")) {
    questionsJSTproger30.forEach((question) => {
      accordionCard(question, questionTproger30);
    });
  }

  const questionHabrPart1 = document.querySelector(".habr-P1-container");
  if (document.querySelector(".habr-P1-container")) {
    questionsJSHabrPart1.forEach((question) => {
      accordionCard(question, questionHabrPart1);
    });
  }

  const questionHabrPart2 = document.querySelector(".habr-P2-container");
  if (document.querySelector(".habr-P2-container")) {
    questionsJSHabrPart2.forEach((question) => {
      accordionCard(question, questionHabrPart2);
    });
  }

  const questionHabr35 = document.querySelector(".habr-30-container");
  if (document.querySelector(".habr-30-container")) {
    questionsJSHabr35.forEach((question) => {
      accordionCard(question, questionHabr35);
    });
  }

  questionsJSHabr;
  const questionHabr70 = document.querySelector(".habr-70-container");
  if (document.querySelector(".habr-70-container")) {
    questionsJSHabr.forEach((question) => {
      accordionCard(question, questionHabr70);
    });
  }

  //css questions
  const questionCSSContainer = document.querySelector(
    ".questions-css__content"
  );

  if (document.querySelector(".questions-css__content")) {
    questionCSS.forEach((question) => {
      addCssQuestions(question, questionCSSContainer);
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
        displayQuestion(questionsJS, "question", "answer");
      });

    // random css question
    document.querySelector("#randomCSS").addEventListener("click", () => {
      displayQuestion(questionCSS, "question", "answer");
    });
  }

  // increase image size on hover and reset on click
  zoomImage({
    imageSelector: ".question__img",
  });

  // add articles to the page
  if (document.querySelector(".article__items")) {
    articlesFromWeb.forEach((article) => {
      addArticles(article);
      // console.log(articlesFromWeb);
    });
  }

  // Filter articles by category
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons) {
    filter(".filter-btn", "data-filter", ".col-md-4");
  }

  const filterButtonsCSS = document.querySelectorAll(".filter-css-btn");
  if (filterButtonsCSS) {
    filter(".filter-css-btn", "data-filter-css", ".accordion-flush");
  }

  //add clock
  const clock = document.querySelector(".time__clock");
  if (clock) {
    function showTime() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();

      if (h === 0) {
        h = 24;
      }

      h = h < 10 ? `0${h}` : h;
      m = m < 10 ? `0${m}` : m;
      s = s < 10 ? `0${s}` : s;

      const time = `${h}:${m}:${s}`;
      clock.textContent = time;
      clock.innerText = time;

      setTimeout(showTime, 1000);
    }

    showTime();
  }

  //add date
  const date = document.querySelector(".time__date");
  if (date) {
    const options = { weekday: "long", month: "long", day: "numeric" };
    const today = new Date();
    date.textContent = today.toLocaleDateString("ru", options);
  }

  //add year
  const year = document.querySelector(".time__year");
  if (year) {
    year.textContent = new Date().getFullYear() + " год";
  }
});
