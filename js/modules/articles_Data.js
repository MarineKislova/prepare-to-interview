const articlesFromWeb = [
  {
    title: "Техническое собеседование на фронтенд разработчика",
    content:
      "Успешное техническое собеседование на фронтенд разработчика – это прежде всего подготовка. Вот список материалов и советов, которые помогут.",
    category: "interview",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/interview-frontend-dev",
    image: "./img/interview_640.png",
  },
  {
    title: "Как успешно пройти любое техническое собеседование",
    content:
      "Сирадж Равал, разработчик, писатель и видеоблоггер, рассказывает как успешно пройти любое техническое собеседование в 5 шагов.",
    category: "interview",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/programming-interview-success",
    image: "./img/interview_640.png",
  },
  {
    title: "Беспощадный Frontend-тест: уволься сам, если не наберешь 7 из 10!",
    content:
      "Думаешь, что уже познал все тайны фронтенда? Готов поставить на кон свою репутацию разработчика? Этот тест заставит тебя попотеть — здесь нет места для случайных правильных ответов.",
    category: "tests_online",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/tests/besposhchadnyy-frontend-test-uvolsya-sam-esli-ne-naberesh-7-iz-10",
    image:
      "https://media.proglib.io/tests/2024/11/27/e6d6185e21e1a5e18920e6c464223341.jpg",
  },
  {
    title: "70 вопросов по JavaScript для подготовки к собеседованию",
    content:
      "Доброго времени суток, друзья! Надеюсь, эта статья будет полезна как начинающим разработчикам, так и опытным. В вопросах, которые показались мне сложнее прочих, приведены ссылки на дополнительную литературу. Буду признателен за развернутые комментарии. Все замечания будут учтены при редактировании статьи. Итак, поехали.",
    category: "interview_questions",
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/486820/",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Вопросы для подготовки к собеседованию по JavaScript. Часть 1",
    content:
      "Стрелочные функции, замыкания, промисы и async/await, методы работы с массивами и объектами, шаблонные литералы, особенности Map и Set, оператор расширения и клонирование объектов.",
    category: "interview_questions",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/voprosy-dlya-podgotovki-k-sobesedovaniyu-po-javascript-chast-1-2023-12-18",
    image: "./img/questions_640.jpg",
  },
  {
    title: "Вопросы для подготовки к собеседованию по JavaScript. Часть 2",
    content:
      "Продолжаем разбирать вопросы для джунов: рассказываем о прототипном наследовании, цикле событий, методах сохранения данных в браузере, конструкторах, генераторах, функциональных выражениях, микро- и макрозадачах.",
    category: "interview_questions",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/voprosy-dlya-podgotovki-k-sobesedovaniyu-po-javascript-chast-2-2024-02-12",
    image: "./img/questions_640.jpg",
  },
  {
    title: "10 вопросов с собеседований по JavaScript",
    content:
      "В этой статье мы рассмотрим 10 вопросов с собеседований по JavaScript и примеры ответов на них, которые помогут вам подготовиться к интервью.",
    category: "interview_questions",
    linkTittle: "Ссылка на proglib.io",
    href: "https://proglib.io/p/10-voprosov-s-sobesedovaniy-po-javascript-2022-02-01",
    image: "./img/questions_640.jpg",
  },
  {
    title: "30 вопросов на собеседовании фронтенд разработчика",
    content:
      "Казалось бы, вопросы на собеседовании frontend разработчика Junior не должны отличаться от стандартных задачек с IT-сайтов. Но складывается впечатление, что работодатели с каждым годом придумывают больше заковыристых вопросов, чтобы поставить кандидата в тупик. ",
    category: "interview_questions",
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
    linkTittle: "Ссылка на habr.com",
    href: "https://habr.com/ru/articles/785596/",
    image:
      "https://habrastorage.org/r/w1560/getpro/habr/upload_files/ae4/87d/a13/ae487da1324922c2db6c88dd0ba0a495.png",
  },
  {
    title: "Учебник по JavaScript: ООП на простых примерах",
    content: "Познакомимся с наследованием, инкапсуляцией, абстракцией и полиморфизмом. А также научимся создавать объекты и использовать синтаксический сахар class.",
    category: "javascript",
    linkTittle: "",
    href: "https://proglib.io/p/uchebnik-po-javascript-oop-na-prostyh-primerah-2022-06-26",
    image: "https://media.proglib.io/posts/2022/06/26/ca4010feb45ff3ce2147350f5e27ace5.webp",
  },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "interview_questions",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/questions_640.jpg",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "interview",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/interview_640.png",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "tests_online",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/test_640.png",
  // },
  // {
  //   title: "Article 1",
  //   content: "This is the content of Article 1",
  //   category: "javascript",
  //   linkTittle: "",
  //   href: "",
  //   image: "./img/test_640.png",
  // },
];

export { articlesFromWeb };
