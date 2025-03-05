const articlesFromWeb = [
  {
    title: "Техническое собеседование на фронтенд разработчика",
    content:
      "Успешное техническое собеседование на фронтенд разработчика – это прежде всего подготовка. Вот список материалов и советов, которые помогут. ",
    category: "interview",
    hashTag: "",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/interview-frontend-dev",
    image: "./img/interview_640.png",
  },
  {
    title: "Как успешно пройти любое техническое собеседование",
    content:
      "Сирадж Равал, разработчик, писатель и видеоблоггер, рассказывает как успешно пройти любое техническое собеседование в 5 шагов.",
    category: "interview",
    hashTag: "",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/programming-interview-success",
    image: "./img/interview_640.png",
  },
  {
    title: "Тесты и задачи по HTML, CSS и JavaScript",
    content:
      "Курс «Тесты и задачи по HTML, CSS и JavaScript» бесплатен. В этом курсе вы сможете проверить свои знания по HTML, CSS и JavaScript. Данный курс позволит узнать много нового, различные нюансы и не самые очевидные возможности, проверить себя и закрепить уже имеющиеся навыки.",
    category: "tests_online",
    hashTag: "",
    linkTittle: "",
    href: "https://stepik.org/lesson/1083417/step/1?unit=1093723",
    image: "./img/test_640.jpg",
  },
  {
    title: "Беспощадный Frontend-тест: уволься сам, если не наберешь 7 из 10!",
    content:
      "Думаешь, что уже познал все тайны фронтенда? Готов поставить на кон свою репутацию разработчика? Этот тест заставит тебя попотеть — здесь нет места для случайных правильных ответов.",
    category: "tests_online",
    hashTag: "",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/tests/besposhchadnyy-frontend-test-uvolsya-sam-esli-ne-naberesh-7-iz-10",
    image: "./img/test_640.jpg",
  },
  {
    title: "70 вопросов по JavaScript для подготовки к собеседованию",
    content:
      "Доброго времени суток, друзья! Надеюсь, эта статья будет полезна как начинающим разработчикам, так и опытным. <br> В вопросах, которые показались мне сложнее прочих, приведены ссылки на дополнительную литературу. Буду признателен за развернутые комментарии. Все замечания будут учтены при редактировании статьи. Итак, поехали.",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/486820/",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Вопросы для подготовки к собеседованию по JavaScript. Часть 1",
    content:
      "Стрелочные функции, замыкания, промисы и async/await, методы работы с массивами и объектами, шаблонные литералы, особенности Map и Set, оператор расширения и клонирование объектов.",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/voprosy-dlya-podgotovki-k-sobesedovaniyu-po-javascript-chast-1-2023-12-18",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Вопросы для подготовки к собеседованию по JavaScript. Часть 2",
    content:
      "Продолжаем разбирать вопросы для джунов: рассказываем о прототипном наследовании, цикле событий, методах сохранения данных в браузере, конструкторах, генераторах, функциональных выражениях, микро- и макрозадачах.",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/voprosy-dlya-podgotovki-k-sobesedovaniyu-po-javascript-chast-2-2024-02-12",
    image: "./img/questions_640.jpg",
  },
  {
    title: "10 вопросов с собеседований по JavaScript",
    content:
      "В этой статье мы рассмотрим 10 вопросов с собеседований по JavaScript и примеры ответов на них, которые помогут вам подготовиться к интервью.",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/10-voprosov-s-sobesedovaniy-po-javascript-2022-02-01",
    image: "./img/questions_640.jpg",
  },
  {
    title: "30 вопросов на собеседовании фронтенд разработчика",
    content:
      "Казалось бы, вопросы на собеседовании frontend разработчика Junior не должны отличаться от стандартных задачек с IT-сайтов. Но складывается впечатление, что работодатели с каждым годом придумывают больше заковыристых вопросов, чтобы поставить кандидата в тупик. ",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на tproger.ru",
    href: "https://tproger.ru/articles/20-voprosov-na-sobesedovanii-frontend-razrabotchika",
    image: "./img/questions_640.jpg",
  },
  {
    title:
      "Вопросы и ответы для собеседования на позицию frontend-разработчик. Часть 1",
    content:
      "В этой статье собраны вопросы именно по JavaScript. В дальнейшем планирую рассмотреть TypeScript отдельно, а также React и связанные с ним технологии.",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/784548/",
    image:
      "https://habrastorage.org/r/w1560/getpro/habr/upload_files/3ad/48e/abb/3ad48eabb1752c5e0c3d0e1a13e8b528.png",
  },
  {
    title:
      "Вопросы и ответы для собеседования на позицию frontend-разработчик. Часть 2",
    content:
      "В этой статье (части) рассмотрим вопросы, связанные с великим и могучим TypeScript'ом, которые задают на собеседованиях. Пожалуйста, не заучивайте вопросы, это вредно для вашего здоровья!)",
    category: "interview_questions",
    hashTag: "typescript",
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/785596/",
    image:
      "https://habrastorage.org/r/w1560/getpro/habr/upload_files/ae4/87d/a13/ae487da1324922c2db6c88dd0ba0a495.png",
  },
  {
    title: "Учебник по JavaScript: ООП на простых примерах",
    content:
      "Познакомимся с наследованием, инкапсуляцией, абстракцией и полиморфизмом. А также научимся создавать объекты и использовать синтаксический сахар class.",
    category: "textbook",
    hashTag: "javascript",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/uchebnik-po-javascript-oop-na-prostyh-primerah-2022-06-26",
    image:
      "https://media.proglib.io/posts/2022/06/26/ca4010feb45ff3ce2147350f5e27ace5.webp",
  },
  {
    title: "35 вопросов с собеседования JavaScript-разработчика",
    content: "Автор оригинала: Abdo Amin",
    category: "interview_questions",
    hashTag: "javascript",
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/578370/",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Мои любимые вопросы о CSS с ответами",
    content:
      "Я проходил множество интервью, и когда дело доходило до вопросов о CSS, то они сводились к: 'Перечислите все известные способы центрирования элемента'. После 5 ответов, откровенно, это надоело. Поэтому я хочу поделиться своими любимыми вопросами о CSS, которые я задаю на интервью.",
    category: "interview_questions",
    hashTag: "css",
    linkTittle: "",
    href: "https://habr.com/ru/articles/499370/",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Вопросы на собеседование Git",
    content:
      "<p>Список этих вопросов поможет вам подготовиться к собеседованию по Git. На этой странице вы найдете список вопросов с краткими ответами и ссылками на материалы для более глубокого изучения. Проверьте свои знания о системе контроля версий Git, включая основные команды, ветвление, слияния и решение конфликтов, чтобы успешно пройти интервью и быть готовым к работе с Git в реальном проекте.</p> <p>Больше вопросов по ссылке:<a class='question__link' href='https://github.com/h5bp/Front-end-Developer-Interview-Questions' target='_blank' rel='noopener noreferrer'>Front-end-Developer-Interview-Questions</a></p>",
    category: "interview_questions",
    hashTag: "css",
    linkTittle: "Ссылка на chm.org.ua",
    href: "https://chm.org.ua/ru/voprosy-na-sobesedovanie-git/",
    image:
      "https://chm.org.ua/wp-content/uploads/2024/02/voprosy-na-sobesedovanie-po-git.png",
  },
  {
    title: "Вопросы на собеседование JavaScript",
    content:
      "<p>Подготовьтесь к собеседованию по JavaScript, изучив вопросы, которые часто задают на технических интервью для позиций junior frontend и junior javascript разработчик. Эта страница содержит краткие ответы на важные вопросы, а также ссылки на ресурсы для дополнительного изучения. Проверьте свои знания основ языка, работы с переменными, функциями, объектами, массивами и другими ключевыми концепциями JavaScript, чтобы быть готовым к любым вопросам на собеседовании.</p> <p>Больше вопросов по ссылке:<a class='question__link' href='https://github.com/h5bp/Front-end-Developer-Interview-Questions' target='_blank' rel='noopener noreferrer'>Front-end-Developer-Interview-Questions</a></p>",
    category: "interview_questions",
    hashTag: "css",
    linkTittle: "Ссылка на chm.org.ua",
    href: "https://chm.org.ua/ru/voprosy-na-sobesedovanie-javascript/",
    image:
      "https://chm.org.ua/wp-content/uploads/2024/02/voprosy-na-sobesedovanie-po-js.png",
  },
  {
    title: "Вопросы на собеседование CSS",
    content:
      "<p>Эта статья поможет вам подготовиться к собеседованию по CSS, предоставляя список часто встречающихся вопросов с краткими ответами и ссылками на материалы для дополнительного изучения. Проверьте свои знания стилизации веб-страниц, а именно: основные концепции CSS, селекторы, свойства и техники, необходимые для успешного прохождения собеседования.</p> <p>Больше вопросов по ссылке:<a class='question__link' href='https://github.com/h5bp/Front-end-Developer-Interview-Questions' target='_blank' rel='noopener noreferrer'>Front-end-Developer-Interview-Questions</a><a class='question__link' href='https://github.com/FedorovAlexander/Front-end-Job-Interview-Questions/blob/master/CSS/README.md' target='_blank' rel='noopener noreferrer'>Front-end-Job-Interview-Questions на русском</a></p>",
    category: "interview_questions",
    hashTag: "css",
    linkTittle: "Ссылка на chm.org.ua",
    href: "https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/",
    image:
      "https://chm.org.ua/wp-content/uploads/2024/02/voprosy-na-sobesedovanie-po-css.png",
  },
  {
    title: "Вопросы на собеседование HTML",
    content:
      "<p>Подготовьтесь к прохождению собеседования по HTML с помощью этой статьи. Здесь вы найдете актуальные вопросы, которые могут быть заданы на собеседовании фронтенд разработчика, а также краткие ответы и ссылки на полезные учебные материалы. Проверьте свои знания ключевых концепций, правильного использования тегов, атрибутов и семантики HTML, чтобы быть уверенным в своих знаниях перед важным интервью.</p> <p>Больше вопросов по ссылке:<a class='question__link' href='https://github.com/h5bp/Front-end-Developer-Interview-Questions' target='_blank' rel='noopener noreferrer'>Front-end-Developer-Interview-Questions</a></p>",
    category: "interview_questions",
    hashTag: "css",
    linkTittle: "Ссылка на chm.org.ua",
    href: "https://chm.org.ua/ru/voprosy-na-sobesedovanie-html/",
    image:
      "https://chm.org.ua/wp-content/uploads/2024/02/voprosy-na-sobesedovanie-po-html-768x768.png",
  },
  {
    title: "Тесты по программированию",
    content:
      "<p>Перед тем как приступать к глубокому изучению любой темы из области программирования, важно убедится в отсутствии пробелов в базовых знаниях. На этой странице нашей платформы вы найдете серию тестов, предназначенных для оценки ваших базовых знаний по <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> и <span>Git</span>. Эти тесты помогут вам выявить пробелы в вашем понимании ключевых концепций и технологий. Если вы допустите ошибку при прохождении теста, не переживайте – к каждому вопросу прилагаются ссылки на учебные материалы, которые помогут вам заполнить пробелы в знаниях. Мы постоянно работаем над расширением нашего арсенала тестов, чтобы предложить вам возможность проверить свои знания по различным технологиям программирования. Следите за обновлениями на странице, чтобы получать доступ к новым тестам и продолжать совершенствовать свои знания и навыки.</p>",
    category: "tests_online",
    hashTag: "",
    linkTittle: "Ссылка на chm.org.ua",
    href: "https://chm.org.ua/ru/testy-po-programmirovaniiu/",
    image: "./img/test_640.jpg",
  },
  {
    title: "Практическое руководство по JSON в JavaScript",
    content:
      "JSON (JavaScript Object Notation) — это текстовый формат обмена данными, который используется повсеместно для отправки и получения информации между клиентом и сервером. Лёгкость структуры JSON и простота работы с ним делают его основным форматом для большинства современных веб-приложений.",
    category: "articles",
    hashTag: "",
    linkTittle: "",
    href: "https://telegra.ph/Prakticheskoe-rukovodstvo-po-JSON-v-JavaScript-10-31",
    image: "./img/articles.jpg",
  },
  {
    title: "Как сделать фильтр на сайте",
    content:
      "Добавление фильтра на веб-сайт может значительно улучшить пользовательский опыт, позволяя пользователям находить нужную информацию или товары. В этом посте мы рассмотрим, как создать простой фильтр на вашем сайте.",
    category: "articles",
    hashTag: "",
    linkTittle: "",
    href: "https://telegra.ph/Kak-sdelat-filtr-na-sajte-10-29",
    image: "./img/articles.jpg",
  },
  {
    title: "Front-End Interview Handbook ",
    content:
      "полный гид по подготовке к собеседованиям на позицию фронтенд-разработчика. Включает разделы по вопросам, задачам и практикам, которые часто встречаются на собеседованиях",
    category: "interview",
    hashTag: "",
    linkTittle: "",
    href: "(https://github.com/yangshun/front-end-interview-handbook)",
    image: "./img/interview_640.png",
  },
  {
    title: "Frontend Собеседование с разбором. Путь к трудоустройству 2024",
    content: "В этом видео представлено тестовое собеседование фронтенд-разработчика",
    category: "video",
    hashTag: "",
    linkTittle: "",
    href: "https://www.youtube.com/watch?v=fNhEAnp3ntw&ab_channel=Reactify%7CFrontend%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0",
    image: "",
    video: "<iframe width='560' height='315' src='https://www.youtube.com/embed/fNhEAnp3ntw?si=QDcY5tePmywxE-Nt' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>",
  },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "articles",
  //   hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/articles.jpg",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "interview_questions",
  // hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/questions_640.jpg",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "interview",
  // hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/interview_640.png",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "tests_online",
  // hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/test_640.jpg",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "javascript",
  // hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/test_640.jpg",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "video",
  // hashTag: "",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/test_640.jpg",
  // },
];

export { articlesFromWeb };
