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

  // Добавляем кнопки "Наверх к разделу" для каждого контейнера
  questionContainers.forEach((container) => {
    addUpBtn(container);
  });

  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.closest(".accordion-item");
      const upButton = container ? container.querySelector(".btnUp") : null;

      // Проверяем, есть ли кнопка
      if (btn.classList.contains("collapsed")) {
        // Если кнопка аккордеона "закрыта"
        if (upButton) {
          upButton.style.display = "none";
        }
      } else {
        // Если кнопка аккордеона "открыта"
        if (upButton) {
          upButton.style.display = "block";
        }
      }
    });
  });

  // Render questions to the page

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
