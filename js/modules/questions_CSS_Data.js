const questionCSS = [
  {
    question: "Что такое CSS?",
    answer: "CSS (Cascading Style Sheets) — это язык стилей, который используется для оформления веб-страниц. CSS используется для оформления элементов HTML, таких как шрифты, цвета, отступы, размеры и т. д.",
  },
  {
    question: "Какие значения принимает свойство display?",
    answer: "<p>block, inline, inline-block, none, flex, grid</p>",
  },
  {
    question: "Какие значения принимает свойство position?",
    answer: "<p>static, relative, absolute, fixed, sticky</p>",
  },
  {
    question: "Какие значения принимает свойство z-index?",
    answer: "<p>auto, число, initial, inherit</p>",
  },
  {
    question: "Что такое BEM?",
    answer:
      "<p>БЭМ (Блок, Элемент, Модификатор) — методология именования классов в HTML и CSS</p>",
  },
  {
    question: "Что такое CSS-переменные?",
    answer:
      "<p>CSS-переменные — это значения, которые могут быть многократно использованы во всём CSS-коде.</p>",
  },
  {
    question: "Что такое CSS-селекторы?",
    answer:
      "<p></p>CSS-селекторы — это шаблоны, которые используются для выбора элементов, которые вы хотите стилизовать.",
  },
  {
    question: "Что такое специфичность селекторов CSS и как она работает?",
    answer:
      "<p><span>Специфичность селектора (еще называют весом)</span> это свойство определяющее приоритет стилевого правила, то есть то, какой стиль будет применен к HTML элементу в итоге. Например, используя какую-нибудь UI библиотеку, элементам этой библиотеки будут применены правила заданные авторами по умолчанию. При необходимости можно поменять стили на свои, «перебив» дефолтные более специфичным селектором.</p> <p>Подробнее тут: <a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/Specificity' target='_blank' rel='noopener noreferrer'>Специфичность (MDN)</a>, <a class='question__link' href='https://habr.com/ru/sandbox/47910/' target='_blank' rel='noopener noreferrer'>Специфичность селекторов CSS</a></p>",
  },
  {
    question: "Что такое CSS-флексы?",
    answer: "<p>CSS-флексы — это мощный инструмент для создания сложных макетов.</p>",
  },
  {
    question: "Что такое псевдоклассы в CSS?",
    answer: "<p>Псевдоклассы в CSS используются для стилизации элементов в определенных состояниях. Например, :hover используется для стилизации элемента при наведении на него курсора</p>",
  },
  {
    question: "Что такое псевдоэлементы в CSS?",
    answer: "<p>Псевдоэлементы в CSS используются для добавления дополнительного содержимого к элементам. Например, ::before и ::after используются для добавления контента до и после элемента</p>",
  },
  {
    question: "Какая разница между сбросом и нормализацией CSS? Что вы выберете и почему?",
    answer: "<p><span>Цель сброса CSS</span> — сбросить все стили в ноль для того, чтобы можно было начать стилизацию сайта с чистого листа. Недостатком сброса стилей является то, что частично их придется устанавливать заново. <span>Цель нормализации</span> — привести исходные стили к единому состоянию, во всех браузерах. Если рассматривать <span>Normalize.css</span>, то с его помощью не просто устанавливаются определенные значения стилей, но и решаются некоторые проблемы отображения элементов, в особенности в мобильных браузерах. Выбирать между двумя инструментами стоит в зависимости от поставленной задачи.</p> <p>Подробнее тут:<a class='question__link' href='https://nicolasgallagher.com/about-normalize-css/' target='_blank' rel='noopener noreferrer'>About normalize.css</a>, <a class='question__link' href='https://htmlacademy.ru/blog/css/short-13' target='_blank' rel='noopener noreferrer'>Нормальный сброс</a>, <a class='question__link' href='https://github.com/necolas/normalize.css' target='_blank' rel='noopener noreferrer'>normalize.css</a></p>",
  },
   {
    question: "За что отвечает свойство float и как оно работает?",
    answer: "<p>Определяет сторону, по которой будет выровнен элемент. Соседние элементы будут «обтекать» такой элемент по противоположной стороне.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/float' target='_blank' rel='noopener noreferrer'>float (MDN)</a>, <a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Floats' target='_blank' rel='noopener noreferrer'>Float — CSS layout</a>, <a class='question__link' href='https://habr.com/ru/articles/142486/' target='_blank' rel='noopener noreferrer'>Подробно о свойстве float</a></p>",
  },
   {
    question: "Что делает свойство z-index и как формируется контекст наложения?",
    answer: "<p>Определяет положение элемента по оси Z. Если элементы перекрываются друг другом (накладываются), это свойство диктует порядок наложения. Работает только для элементов у которых свойство position установлено как absolute/relative/fixed.</p> <p>Подробнее тут:<a class='question__link' href='' target='_blank' rel='noopener noreferrer'>z-index (MDN)</a></p>",
  },
   {
    question: "Опишите BFC (Block Formatting Context — блочный контекст форматирования) и принцип его работы.",
    answer: "<p><span>Block formatting context</span> — это область, в которой происходит форматирование и размещение блочных элементов. Он играет важную роль в определении того, как элементы взаимодействуют друг с другом по отношению к своим родительским и соседним элементам.</p> <p>Принцип работы BFC заключается в том, что каждый блочный контейнер формирует свой собственный контекст форматирования, внутри которого происходит распределение и позиционирование его потомков. Это позволяет избежать некоторых типичных проблем в верстке, таких как проблемы с плавающими элементами, внешними отступами и переполнениями контейнеров.</p> <p>Создать BFC можно с помощью <span>определенных CSS свойств</span>, таких как <span>overflow</span>, <span>float</span>, <span>display</span> и <span>position</span>. Например, установка свойства <span>overflow</span> на значение, отличное от <span>visible</span>, создаст BFC для элемента.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_display/Block_formatting_context' target='_blank' rel='noopener noreferrer'>Блочный контекст форматирования</a></p>",
  },
   {
    question: "Какие существуют методы очистки floats и какие из них подходят для какого контекста?",
    answer: "<p><span>Свойство clear</span>, примененное к нижестоящему (от float) элементу со значениями <span>left, right, both,</span> а также свойство <span>overflow</span> со значением <span>hidden</span>. Само по себе свойство <span>overflow</span> управляет отображением содержимого блока (добавляет полосы прокрутки, обрезает не поместившийся контент), в добавок, значения <span>auto</span>, <span>scroll</span> или <span>hidden</span> отменяют свойство <span>float</span>.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Floats#%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2_%D0%BE%D0%B1%D1%91%D1%80%D0%BD%D1%83%D1%82%D1%8B%D1%85_%D0%B2%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%BE%D0%B1%D1%82%D0%B5%D0%BA%D0%B0%D0%B5%D0%BC%D1%8B%D1%85_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2' target='_blank' rel='noopener noreferrer'>Очистка блоков обёрнутых вокруг обтекаемых элементов</a>, <a class='question__link' href='https://webref.ru/course/float/clearfix' target='_blank' rel='noopener noreferrer'>Очистка float</a>, <a class='question__link' href='https://habr.com/ru/articles/174443/' target='_blank' rel='noopener noreferrer'>Очистка float-элементов посредством создания нового блочного контекста форматирования</a></p>",
  },
   {
    question: "Каким образом вы боритесь с проблемами стилизации, связанными с кросс-браузерностью?",
    answer: "<p>Есть несколько основных решений проблем стилизации, связанных с кросс-браузерностью. Например, разделение стилей для разных браузеров и устройств, а также добавление вендорных префиксов к стилевым правилам. Метод разделения стилей заключается в идентификации вида браузера пользователя и применении соответствующего стиля в дополнение к основным стилям. С помощью <span>правила @media</span> можно указать тип устройства, для которого будет применены определенные стили, а добавление <span>вендорных префиксов</span> к стилям расширит список поддерживаемых браузеров.</p> <p>Подробнее тут:<a class='question__link' href='https://htmlacademy.ru/blog/html/progressive-enhancement' target='_blank' rel='noopener noreferrer'>Прогрессивное улучшение</a>, <a class='question__link' href='https://habr.com/ru/sandbox/22561/' target='_blank' rel='noopener noreferrer'>Кроссбраузерность. Причины и приемы</a>, <a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Testing/Introduction#%D1%87%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%D0%BA%D1%80%D0%BE%D1%81%D1%81-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5' target='_blank' rel='noopener noreferrer'>Что такое кросс-браузерное тестирование?</a>",
  },
   {
    question: "Как работать со стилями в старых браузерах с ограниченными возможностями? Какие методы/техники вы используете? ",
    answer: "<p>Подход <span>progressive enhancement</span> предполагает поэтапное создание веб-интерфейсов, должны создаваться поэтапно, циклически, от простого к сложному. На каждом из этапов создается законченный веб-интерфейс, как улучшенная версия предыдущего. Всего можно выделить 4 этапа:</p> <ul> <li>1. <span>HTML</span> — содержимое страницы размечается с помощью HTML. Важно сделать логически и семантически правильную разметку, тогда документ будет корректно отображен любым браузером. Этот этап является самым важным.</li> <li>2. <span>CSS</span> — документ получает аккуратный вид: появляется сетка страницы, фоновые изображения и т.д.</li> <li>3. <span>CSS3</span> — добавляются анимационные и декоративные фишки, тени, плашки, уголки и т.д.</li> <li>4. <span>JavaScript</span> — улучшается взаимодействие с интерфейсом: AJAX решения, динамические элементы и т.д.</li> </ul> <p>Такой подход в сочетании с <span>mobile first</span> гарантирует, что страница сайта будет корректно отображаться на любых устройствах. Подход <span>graceful degradation</span> имеет обратную философию — функционал сайта деградирует от сложного к более простому в ранних версиях браузеров, где еще не реализованы последние фичи. Для определения наличия нужного функционала браузера используется другой прием — <span>feature detection (правило @supports)</span></p><p>Подробнее тут:<a class='question__link' href='https://htmlacademy.ru/blog/html/progressive-enhancement' target='_blank' rel='noopener noreferrer'>Прогрессивное улучшение</a></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
   {
    question: "",
    answer: "<p></p>",
  },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {
    question: "",
    answer: "",
  },
];

const addID = (arr) => {
  arr.forEach((item, index) => {
    item.id = index + 1;
  });
};

addID(questionCSS);
console.log(questionCSS);


export { questionCSS };

