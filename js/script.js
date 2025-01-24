// import questions JS
import { questionsJSHabr } from "./modules/question_JS_Data.js";
import { questionsJSProglibPart1 } from "./modules/question_JS_Data.js";
import { questionsJSProglibPart2 } from "./modules/question_JS_Data.js";
import { questionsJSProglib10 } from "./modules/question_JS_Data.js";
import { questionsJSTproger30 } from "./modules/question_JS_Data.js";
import { questionsJSHabrPart1 } from "./modules/question_JS_Data.js";
import { questionsJSHabrPart2 } from "./modules/question_JS_Data.js";
import { questionsJSHabr35 } from "./modules/question_JS_Data.js";

import { questionJavaScript } from "./modules/question_JS_Data.js";

// import questions css
import { questionCSS } from "./modules/questions_CSS_Data.js";

// import questions html

// import questions articles
import { articlesFromWeb } from "./modules/articles_Data.js";

// import functions for displaying questions and articles
import accordionCard from "./modules/accordionCard.js";
import displayQuestion from "./modules/displayQuestions.js";
import addArticles from "./modules/addArticles.js";
import zoomImage from "./modules/zoomImage.js";

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
  const accordionItem = document.querySelectorAll(".accordion-item");
  const accordionButton = document.querySelectorAll(".accordion-button");

  function runUp({ containerSelector, tittleSelector, buttonSelector }) {
    const container = document.querySelector(containerSelector);
    const tittle = document.querySelector(tittleSelector);
    const button = document.querySelector(buttonSelector);

    const upButton = document.createElement("button");
    upButton.textContent = "Up";
    upButton.classList.add("btn", "btn-outline-secondary", "up-button");
    container.appendChild(upButton);

    upButton.addEventListener("click", () => {
      container.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  accordionButton.forEach((button) => {
    button.addEventListener("click", () => {
      runUp({
        containerSelector: ".accordion-item",
        tittleSelector: ".questions__container",
        buttonSelector: ".accordion-button ",
      });
    });
  });

  // Render questions to the page

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

  // increase image size on hover and reset on click
  zoomImage({
    imageSelector: ".question__img",
  });

  // document.querySelectorAll(".question__img").forEach((image) => {
  //   image.addEventListener("mouseenter", () => {
  //     image.style.cursor = "zoom-in";
  //   });
  //   image.addEventListener("click", () => {
  //     if (!image.classList.contains("zoomed")) {
  //       image.classList.add("zoomed");
  //       image.style.cursor = "zoom-out";
  //       console.log("img");
  //     } else {
  //       image.classList.remove("zoomed");
  //       image.style.cursor = "zoom-in";
  //       image.style.transition = "transform 0.3s ease-in-out";
  //     }
  //   });
  // });

  // add articles to the page
  if (document.querySelector(".article__items")) {
    articlesFromWeb.forEach((article) => {
      addArticles(article);
      // console.log(articlesFromWeb);
    });
  }

  // Filter articles by category
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      const articles = document.querySelectorAll(".col-md-4");

      articles.forEach((article) => {
        if (
          filter === "all" ||
          article.getAttribute("data-category") === filter
        ) {
          article.style.display = "flex";
        } else {
          article.style.display = "none";
        }
      });

      // Highlight active button
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });
});
