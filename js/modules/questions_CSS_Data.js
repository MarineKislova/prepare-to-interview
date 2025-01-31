const questionCSS = [
  {
    id: 1,
    question: 'Что такое CSS?',
    answer: 'CSS (Cascading Style Sheets) — это язык стилей, который используется для оформления веб-страниц. CSS используется для оформления элементов HTML, таких как шрифты, цвета, отступы, размеры и т. д.',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 2,
    question: 'Какие значения принимает свойство display?',
    answer: '<p>block, inline, inline-block, none, flex, grid</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 3,
    question: 'Какие значения принимает свойство position?',
    answer: '<p>static, relative, absolute, fixed, sticky</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 4,
    question: 'Какие значения принимает свойство z-index?',
    answer: '<p>auto, число, initial, inherit</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 5,
    question: 'Что такое BEM?',
    answer: '<p>БЭМ (Блок, Элемент, Модификатор) — методология именования классов в HTML и CSS</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 6,
    question: 'Что такое CSS-переменные?',
    answer: '<p>CSS-переменные — это значения, которые могут быть многократно использованы во всём CSS-коде.</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 7,
    question: 'Что такое CSS-селекторы?',
    answer: '<p></p>CSS-селекторы — это шаблоны, которые используются для выбора элементов, которые вы хотите стилизовать.',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 8,
    question: 'Что такое специфичность селекторов CSS и как она работает?',
    answer: "<p><span>Специфичность селектора (еще называют весом)</span> это свойство определяющее приоритет стилевого правила, то есть то, какой стиль будет применен к HTML элементу в итоге. Например, используя какую-нибудь UI библиотеку, элементам этой библиотеки будут применены правила заданные авторами по умолчанию. При необходимости можно поменять стили на свои, «перебив» дефолтные более специфичным селектором.</p> <p>Подробнее тут: <a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/Specificity' target='_blank' rel='noopener noreferrer'>Специфичность (MDN)</a>, <a class='question__link' href='https://habr.com/ru/sandbox/47910/' target='_blank' rel='noopener noreferrer'>Специфичность селекторов CSS</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 9,
    question: 'Что такое CSS-флексы?',
    answer: '<p>CSS-флексы — это мощный инструмент для создания сложных макетов.</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 10,
    question: 'Что такое псевдоклассы в CSS?',
    answer: '<p>Псевдоклассы в CSS используются для стилизации элементов в определенных состояниях. Например, :hover используется для стилизации элемента при наведении на него курсора</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 11,
    question: 'Что такое псевдоэлементы в CSS?',
    answer: '<p>Псевдоэлементы в CSS используются для добавления дополнительного содержимого к элементам. Например, ::before и ::after используются для добавления контента до и после элемента</p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    id: 12,
    question: 'Какая разница между сбросом и нормализацией CSS? Что вы выберете и почему?',
    answer: "<p><span>Цель сброса CSS</span> — сбросить все стили в ноль для того, чтобы можно было начать стилизацию сайта с чистого листа. Недостатком сброса стилей является то, что частично их придется устанавливать заново. <span>Цель нормализации</span> — привести исходные стили к единому состоянию, во всех браузерах. Если рассматривать <span>Normalize.css</span>, то с его помощью не просто устанавливаются определенные значения стилей, но и решаются некоторые проблемы отображения элементов, в особенности в мобильных браузерах. Выбирать между двумя инструментами стоит в зависимости от поставленной задачи.</p> <p>Подробнее тут:<a class='question__link' href='https://nicolasgallagher.com/about-normalize-css/' target='_blank' rel='noopener noreferrer'>About normalize.css</a>, <a class='question__link' href='https://htmlacademy.ru/blog/css/short-13' target='_blank' rel='noopener noreferrer'>Нормальный сброс</a>, <a class='question__link' href='https://github.com/necolas/normalize.css' target='_blank' rel='noopener noreferrer'>normalize.css</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 13,
    question: 'За что отвечает свойство float и как оно работает?',
    answer: "<p>Определяет сторону, по которой будет выровнен элемент. Соседние элементы будут «обтекать» такой элемент по противоположной стороне.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/float' target='_blank' rel='noopener noreferrer'>float (MDN)</a>, <a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Floats' target='_blank' rel='noopener noreferrer'>Float — CSS layout</a>, <a class='question__link' href='https://habr.com/ru/articles/142486/' target='_blank' rel='noopener noreferrer'>Подробно о свойстве float</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 14,
    question: 'Что делает свойство z-index и как формируется контекст наложения?',
    answer: "<p>Определяет положение элемента по оси Z. Если элементы перекрываются друг другом (накладываются), это свойство диктует порядок наложения. Работает только для элементов у которых свойство position установлено как absolute/relative/fixed.</p> <p>Подробнее тут:<a class='question__link' href='' target='_blank' rel='noopener noreferrer'>z-index (MDN)</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 15,
    question: 'Опишите BFC (Block Formatting Context — блочный контекст форматирования) и принцип его работы.',
    answer: "<p><span>Block formatting context</span> — это область, в которой происходит форматирование и размещение блочных элементов. Он играет важную роль в определении того, как элементы взаимодействуют друг с другом по отношению к своим родительским и соседним элементам.</p> <p>Принцип работы BFC заключается в том, что каждый блочный контейнер формирует свой собственный контекст форматирования, внутри которого происходит распределение и позиционирование его потомков. Это позволяет избежать некоторых типичных проблем в верстке, таких как проблемы с плавающими элементами, внешними отступами и переполнениями контейнеров.</p> <p>Создать BFC можно с помощью <span>определенных CSS свойств</span>, таких как <span>overflow</span>, <span>float</span>, <span>display</span> и <span>position</span>. Например, установка свойства <span>overflow</span> на значение, отличное от <span>visible</span>, создаст BFC для элемента.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_display/Block_formatting_context' target='_blank' rel='noopener noreferrer'>Блочный контекст форматирования</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 16,
    question: 'Какие существуют методы очистки floats и какие из них подходят для какого контекста?',
    answer: "<p><span>Свойство clear</span>, примененное к нижестоящему (от float) элементу со значениями <span>left, right, both,</span> а также свойство <span>overflow</span> со значением <span>hidden</span>. Само по себе свойство <span>overflow</span> управляет отображением содержимого блока (добавляет полосы прокрутки, обрезает не поместившийся контент), в добавок, значения <span>auto</span>, <span>scroll</span> или <span>hidden</span> отменяют свойство <span>float</span>.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Floats#%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%BA%D0%B0_%D0%B1%D0%BB%D0%BE%D0%BA%D0%BE%D0%B2_%D0%BE%D0%B1%D1%91%D1%80%D0%BD%D1%83%D1%82%D1%8B%D1%85_%D0%B2%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%BE%D0%B1%D1%82%D0%B5%D0%BA%D0%B0%D0%B5%D0%BC%D1%8B%D1%85_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%B2' target='_blank' rel='noopener noreferrer'>Очистка блоков обёрнутых вокруг обтекаемых элементов</a>, <a class='question__link' href='https://webref.ru/course/float/clearfix' target='_blank' rel='noopener noreferrer'>Очистка float</a>, <a class='question__link' href='https://habr.com/ru/articles/174443/' target='_blank' rel='noopener noreferrer'>Очистка float-элементов посредством создания нового блочного контекста форматирования</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 17,
    question: 'Каким образом вы боритесь с проблемами стилизации, связанными с кросс-браузерностью?',
    answer: "<p>Есть несколько основных решений проблем стилизации, связанных с кросс-браузерностью. Например, разделение стилей для разных браузеров и устройств, а также добавление вендорных префиксов к стилевым правилам. Метод разделения стилей заключается в идентификации вида браузера пользователя и применении соответствующего стиля в дополнение к основным стилям. С помощью <span>правила @media</span> можно указать тип устройства, для которого будет применены определенные стили, а добавление <span>вендорных префиксов</span> к стилям расширит список поддерживаемых браузеров.</p> <p>Подробнее тут:<a class='question__link' href='https://htmlacademy.ru/blog/html/progressive-enhancement' target='_blank' rel='noopener noreferrer'>Прогрессивное улучшение</a>, <a class='question__link' href='https://habr.com/ru/sandbox/22561/' target='_blank' rel='noopener noreferrer'>Кроссбраузерность. Причины и приемы</a>, <a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Extensions/Testing/Introduction#%D1%87%D1%82%D0%BE_%D1%82%D0%B0%D0%BA%D0%BE%D0%B5_%D0%BA%D1%80%D0%BE%D1%81%D1%81-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%BD%D0%BE%D0%B5_%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5' target='_blank' rel='noopener noreferrer'>Что такое кросс-браузерное тестирование?</a>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 18,
    question: 'Как работать со стилями в старых браузерах с ограниченными возможностями? Какие методы/техники вы используете? ',
    answer: "<p>Подход <span>progressive enhancement</span> предполагает поэтапное создание веб-интерфейсов, должны создаваться поэтапно, циклически, от простого к сложному. На каждом из этапов создается законченный веб-интерфейс, как улучшенная версия предыдущего. Всего можно выделить 4 этапа:</p> <ul> <li>1. <span>HTML</span> — содержимое страницы размечается с помощью HTML. Важно сделать логически и семантически правильную разметку, тогда документ будет корректно отображен любым браузером. Этот этап является самым важным.</li> <li>2. <span>CSS</span> — документ получает аккуратный вид: появляется сетка страницы, фоновые изображения и т.д.</li> <li>3. <span>CSS3</span> — добавляются анимационные и декоративные фишки, тени, плашки, уголки и т.д.</li> <li>4. <span>JavaScript</span> — улучшается взаимодействие с интерфейсом: AJAX решения, динамические элементы и т.д.</li> </ul> <p>Такой подход в сочетании с <span>mobile first</span> гарантирует, что страница сайта будет корректно отображаться на любых устройствах. Подход <span>graceful degradation</span> имеет обратную философию — функционал сайта деградирует от сложного к более простому в ранних версиях браузеров, где еще не реализованы последние фичи. Для определения наличия нужного функционала браузера используется другой прием — <span>feature detection (правило @supports)</span></p><p>Подробнее тут:<a class='question__link' href='https://htmlacademy.ru/blog/html/progressive-enhancement' target='_blank' rel='noopener noreferrer'>Прогрессивное улучшение</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 19,
    question: 'Какие вы знаете способы для скрытия контента сайта (при этом оставив его доступным для скринридеров)?',
    answer: "<p>Свойство <span>opacity</span> со значением 0 скрывает элемент и все его дочерние элементы. Скрытый контент всё ещё присутствует на странице, его место ничем не занято. Техника <span>.sr-only</span> позволяет скрыть элемент, но оставить его доступным для скринридеров</p> <p><img class='question__img' src='img/css/1css.png' alt=''></p> <p>Подробнее тут:<a class='question__link' href='https://cloudfour.com/thinks/see-no-evil-hidden-content-and-accessibility/' target='_blank' rel='noopener noreferrer'>See No Evil: Hidden Content and Accessibility</a>, <a class='question__link' href='https://habr.com/ru/companies/ruvds/articles/485640/' target='_blank' rel='noopener noreferrer'>Методы скрытия элементов веб-страниц</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 20,
    question: 'Вы, когда-либо, использовали Grid систему, и, если да, то какую технологию для упрощения разметки HTML-страниц вы предпочитаете?',
    answer: "<p><span>Grid Layout</span> — двумерная сетка (набор вертикальных и горизонтальных линий) для CSS. Используется для размещения основных областей страницы или небольших элементов пользовательского интерфейса. Элементы помещаются в сетку, соответственно строкам и столбцам. <span>Grid</span> позволяет создать сетку с фиксированными размерами полос, размещать элементы в заданном месте, создавать дополнительные полосы для управления контентом и выравниванием. В сочетании с <span>flexbox, grid Layout</span> позволяет строить макеты, создание которых при помощи <span>чистого CSS</span> невозможно.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout' target='_blank' rel='noopener noreferrer'>Основные понятия Grid Layout,</a><a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods' target='_blank' rel='noopener noreferrer'>Связь Grid-разметки с другими методами.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 21,
    question: 'Что вы можете рассказать о медиа-запросах?',
    answer: "<p><span>Медиа-запросы</span> позволяют адаптировать страницы для разных типов устройств (принтеров, речевых браузеров и т.д.) или для устройств с определенными характеристиками: ширина <span>(width)</span>, высота <span>(height)</span>, соотношение ширины к высоте области просмотра <span>(aspect-ratio)</span>, ориентация <span>(orientation)</span>, разрешение <span>(resolution)</span>, количество бит на каждый из цветовых компонентов устройства <span>(color)</span> и другие</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries' target='_blank' rel='noopener noreferrer'>Использование медиа-запросов.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 22,
    question: 'Что вы можете рассказать о стилизации SVG?',
    answer: "<p>Стилизация (изменение внешнего вида) <span>SVG-элементов</span> аналогично <span>HTML</span>, с некоторыми особенностями: фон назначается свойством <span>fill</span>, а граница — <span>stroke</span> вместо <span>border</span>. Свойства могут добавляться как непосредственно в <span>теги</span>, так и как <span>стили</span>. Также возможно подключение внешних стилей. Поскольку <span>SVG</span> основан на <span>XML-разметке</span>, то стиль в <span>.svg-документе</span> необходимо заключать в <span>CDATA</span>, иначе конструкция будет конфликтовать с <span></span>XML-парсерами. <span>SVG — элементы</span> можно группировать с помощью <span>тэга g</span> и применять к ним общие стили.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/SVG/Tutorial/SVG_and_CSS' target='_blank' rel='noopener noreferrer'>SVG и CSS,</a> <a class='question__link' href='https://habr.com/ru/articles/157965/' target='_blank' rel='noopener noreferrer'>Стилизация SVG-графики.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 23,
    question: 'Приведите какой-либо пример свойства @media отличительного от @media screen?',
    answer: "<p><span>@media all</span> — значение по умолчанию, для всех типов устройств.</p> <p><span>@media print</span> — принтеры.</p> <p><span>@media speech</span> — программы для воспроизведения текста вслух (в том числе речевые браузеры) и речевые синтезаторы.</p> <p>Подробнее тут:<a class='question__link' href='https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/' target='_blank' rel='noopener noreferrer'>@media (MDN),</a><a class='question__link' href='https://webref.ru/css/value/media' target='_blank' rel='noopener noreferrer'>Медиа-запросы.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 24,
    question: ' Какие моменты по написанию эффективного CSS вы бы выделили?',
    answer: "<p>- Код должен быть валидным (корректно выполняться).</p> <p>- Комментарии должны быть подробными.</p> <p>- Код должен быть разбит на логические блоки, каждый блок нужно отделять пустой строкой.</p> <p>- Использование иерархии облегчает чтение кода.</p> <p>- Свойства желательно размещать в алфавитном порядке.</p> <p>- Каскадные таблицы (CSS) нужно размещать в отдельном файле.</p> <p>- Неиспользуемые селекторы нужно удалять.</p> <p>- Нужно использовать там, где возможно, универсальные свойства.</p> <p>Подробнее тут:<a class='question__link' href='https://www.freecodecamp.org/news/10-css-hacks-every-web-developer-should-know/' target='_blank' rel='noopener noreferrer'>10 CSS Hacks Every Web Developer Should Know,</a><a class='question__link' href='https://habr.com/ru/articles/86770/' target='_blank' rel='noopener noreferrer'>Правила хорошего CSS,</a><a class='question__link' href='https://htmlbook.ru/samcss/napisanie-effektivnogo-koda' target='_blank' rel='noopener noreferrer'>Написание эффективного кода.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 25,
    question: 'Каковы преимущества/недостатки использования препроцессоров CSS? Опишите, что вам понравилось/не понравилось в использованных вами, препроцессорах.',
    answer: "<p>Преимущества использования препроцессоров: использование дополнительного функционала (переменных, условий, циклов, функций и т.д.). Недостатки, в целом, проявляются при неправильном использовании этого функционала. Например:</p> <p>- Злоупотребление <span>примесями</span> (<span>@mixin</span>, когда один объект копирует свойства другого объекта). В итоге значительно увеличивается размер файла и падает общая производительность.</p> <p>- Использование <span>расширения (@extend)</span> в Sass позволяет избежать описанную выше проблему, но может возникнуть другая: многократное расширение базового класса может привести к получению CSS-правила с длинным именем селектора, что плохо сказывается на производительности.</p> <p>- При редактировании <span>миксина</span> или <span>базового класса</span> можно, не заметив, изменить свойства множества объектов.</p> <p>- Обобщая селекторы, можно слишком увеличить их специфичность, что затруднит их управление и поддержку.</p> <p>В целом, использование препроцессоров предоставляет отличные синтаксис и возможности, но нужно тщательно взвешивать все за и против их использования для каждого конкретного проекта.</p><p>Подробнее тут:<a class='question__link' href='https://medium.com/nuances-of-programming/%D0%BF%D1%80%D0%B5%D0%B8%D0%BC%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0-%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D0%B0-sass-%D0%BF%D1%80%D0%B8-%D0%BD%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B8-css-461445b8e080' target='_blank' rel='noopener noreferrer'>Преимущества использования препроцессора (Sass) при написании CSS,</a><a class='question__link' href='https://habr.com/ru/articles/214143/' target='_blank' rel='noopener noreferrer'>Почему стоит использовать препроцессоры.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 26,
    question: 'Какие существуют псевдоэлементы и для чего они используются.',
    answer: "<p><span>Псевдоэлемент в CSS</span> — это ключевое слово, которое добавляется к селектору и позволяет стилизовать определенную часть выбранного элемента. Псевдоэлементы: <span>:after</span>, <span>:before</span>, <span>:first-letter</span>, <span>:first-line</span>.</p> <p>- <span>:after</span> — применяется для вставки нужного контента после выбранного элемента. Применяется со свойством content, которое определяет содержимое для вставки.</p> <p>- <span>:before</span> — применяется для вставки нужного контента до выбранного элемента. Также необходимо задать свойство content с содержимым для вставки.</p> <p>- <span>:first-letter</span> — добавляет к первому элементу в тексте и определяет его стиль: можно создавать буквицу (увеличенную первую букву, базовая линия которой ниже на одну или несколько строк базовой линии основного текста) или выступающий инициал (увеличенная прописная буква, линия которой совпадает с линией основного текста).</p> <p>- <span>:first-line</span> — используется для изменения первой строки блочного текста.</p> <p>Подробнее тут:<a class='question__link' href='https://htmlbook.ru/samcss/psevdoelementy' target='_blank' rel='noopener noreferrer'>Псевдоэлементы,</a><a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/Pseudo-elements' target='_blank' rel='noopener noreferrer'>Псевдоэлементы (MDN).</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 27,
    question: 'Что такое блочная модель, и как, с помощью CSS, менять расположение блоков на странице в браузере?',
    answer: "<p><span>Блочная модель</span> — модель, при которой каждый элемент представляет собой прямоугольный блок и имеет ширину, высоту, поля, границы и отступы. Менять расположение элементов можно с помощью <span>позиционирования (position)</span>, <span>отступов (margin)</span> и <span>трансформирования (transform)</span>.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/Styling_basics/Box_model' target='_blank' rel='noopener noreferrer'>Блочная модель (MDN),</a><a class='question__link' href='https://htmlbook.ru/samlayout/blochnaya-verstka/blochnaya-model' target='_blank' rel='noopener noreferrer'>Блочная модель,</a><a class='question__link' href='https://webref.ru/layout/learn-html-css/box-model' target='_blank' rel='noopener noreferrer'>Открываем блочную модель.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 28,
    question: 'Что делает свойство *{box-sizing: border-box;}? Какие его преимущества?',
    answer: "<p>При использовании <span>box-sizing</span>: <span>border-box</span> свойства <span>width</span> и <span>height</span> включают в себя значения <span>padding</span> и <span>border</span>, но не отступов (<span>margin</span>). Т.е. объект остается с фиксированными параметрами, но уменьшается место для контента. При использовании <span>border-box</span>, не нужно беспокоиться о том, сколько места будет занимать отступ или граница, так как эти значения просто отнимаются от общей ширины, а не добавляются к ней</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/box-sizing' target='_blank' rel='noopener noreferrer'>box-sizing (MDN),</a><a class='question__link' href='https://www.w3schools.com/css/css3_box-sizing.asp' target='_blank' rel='noopener noreferrer'>CSS Box Sizing,</a><a class='question__link' href='https://htmlbook.ru/css/box-sizing' target='_blank' rel='noopener noreferrer'>box-sizing.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 29,
    question: 'За что отвечает свойство display в CSS? Приведите пару примеров его использования.',
    answer: "<p>Свойство <span>display</span> определяет как элемент будет показан в документе. Если указать свойству <span>display</span> значение <span>none</span>, то элемент и все его дочерние элементы будет удалены из дерева доступности (объект в котором хранится информация для вспомогательных технологий по обеспечению доступности сайта для людей с повышенными потребностями) и не будут восприниматься технологиями чтения экранов. Значение свойства <span>display — contents</span>, удаляет элемент из дерева доступности, дочерние элементы становятся дочерними элементами следующего уровня в DOM.</p> <p>Подробнее тут:<a class='question__link' href='https://www.w3schools.com/cssref/pr_class_display.php' target='_blank' rel='noopener noreferrer'>CSS display Property,</a><a class='question__link' href='https://htmlbook.ru/css/display' target='_blank' rel='noopener noreferrer'>display,</a><a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/display' target='_blank' rel='noopener noreferrer'>display (MDN).</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 30,
    question: 'Объясните разницу между значениями inline и inline-block?',
    answer: "<p><span>Inline</span> и <span>inline-block</span> это значения, которые можно назначить свойству <span>display</span>. При использовании <span></span>inline для любого элемента он становится строчным. <span>Inline-block</span> объединяет в себе характеристики как строчных, так и блочных элементов: блочный элемент с поведением, как у строчного. Содержимое таких элементов будет отображаться, как обычно, но при этом блоки будут вести себя как строчные элементы, выстраиваясь в одной строке друг за другом и переносясь на новую строку лишь при необходимости.</p> <p>Подробнее тут:<a class='question__link' href='https://www.w3schools.com/css/css_inline-block.asp#:~:text=The%20display%3A%20inline%2Dblock%20Value,display%3A%20inline%20they%20are%20not.' target='_blank' rel='noopener noreferrer'>CSS Layout — display: inline-block,</a><a class='question__link' href='https://www.samanthaming.com/pictorials/css-inline-vs-inlineblock-vs-block/' target='_blank' rel='noopener noreferrer'>CSS Inline vs Inline-Block vs Block,</a><a class='question__link' href='https://habr.com/ru/articles/161581/' target='_blank' rel='noopener noreferrer'>Inline-block как замена float.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 31,
    question: 'Объясните разницу между псевдоклассами «nth-of-type()» и «nth-child()» ?',
    answer: "<p>- <span>nth-of-type()</span> используется для добавления стиля к элементам указанного типа на основе нумерации в дереве элементов.</p> <p>- <span>nth-child()</span> это псевдокласс, который используется для выбора дочерних элементов с помощью числового выражения без учета типов элементов.</p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/:nth-child' target='_blank' rel='noopener noreferrer'>:nth-child (MDN),</a><a class='question__link' href='https://developer.mozilla.org/ru/docs/Web/CSS/:nth-of-type' target='_blank' rel='noopener noreferrer'>:nth-of-type (MDN),</a><a class='question__link' href='https://habr.com/ru/articles/119139/' target='_blank' rel='noopener noreferrer'>Различия между :nth-child и :nth-of-type.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 32,
    question: 'Объясните разницу между relative, fixed, absolute и static — видами позиционирования элемента?',
    answer: "<p><span>Relative</span> — положение элемента задается относительно исходного расположения. Сам элемент становится родительским для всех дочерних, абсолютно позиционировнных элементов. </p> <p><span>Fixed</span> — положение элемента привязывается к указанной свойствами left, top, right и bottom точке на экране и не меняет своего положения при прокрутке страницы. </p> <p><span>Absolute</span> — положение элемента задается относительно границ родительского элемента (тот у которого position: relative), элемент выпадает из изначального контекста.  </p> <p><span>Static</span> — положение элемента остается неизменным. Такой вид позиционирования еще называют нормальным. Элементы отображаются в том же порядке, как они идут в исходном коде </p> <p>Подробнее тут:<a class='question__link' href='https://developer.mozilla.org/ru/docs/Learn_web_development/Core/CSS_layout/Positioning' target='_blank' rel='noopener noreferrer'>Позиционирование (MDN),</a><a class='question__link' href='https://htmlbook.ru/samlayout/blochnaya-verstka/pozitsionirovanie-elementov' target='_blank' rel='noopener noreferrer'>Позиционирование элементов,</a><a class='question__link' href='https://webref.ru/course/position' target='_blank' rel='noopener noreferrer'>Позиционирование.</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 33,
    question: 'Какие CSS фреймворки вы использовали? Как бы вы изменили/улучшили их?',
    answer: "<p><span>Bootstrap</span> — известен популяризацией внимания к адаптивному дизайну среди веб-разработчиков. Он продвигал теперь уже повсеместно распространенную концепцию mobile-first и предоставлял правильные инструменты для ее легкой реализации. С Bootstrap разработчикам не нужно создавать отдельные проекты для адаптации сайта к экранам меньшего размера. Им нужно включить необходимые классы Bootstrap, и дизайн подстроится сам.</p> <p><span>Сравнительная таблица фреймворков CSS</span></p> <p><img class='question__img' src='https://robotdreams.cc/ckeditor/blog/423/image%2043-min.png' alt=''></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 34,
    question: 'В чем разница между разработкой адаптивных веб-сайтов и использовании “Mobile first” стратегии?',
    answer: "<p>При <span>адаптивной разработке</span> главными являются 3 вещи: <span>резиновый макет</span>, <span>медиа-выражения</span> и <span>гибкие картинки</span>. Все размеры рекомендуют указывать в процентах для большей точности. Сайт должен быть ориентирован не на конкретное устройство, а на содержимое. <span>Mobile First</span> — подход, который предполагает сначала разработку мобильной версии, а затем ее усложнение до десктопной. Самая важная информация должна быть показана первой. Сайт должен быть легким, для быстрой загрузки при любой скорости интернета.</p> <p>Подробнее тут:<a class='question__link' href='https://medium.com/@Cleveroad/how-mobile-first-web-design-is-different-from-adaptive-and-responsive-c5a86ef3d4a4#:~:text=They%20both%20adjust%20to%20different,the%20content%20is%20changing%20dynamically.' target='_blank' rel='noopener noreferrer'>How Mobile-First Web Design Is Different From Adaptive and Responsive,</a><a class='question__link' href='https://htmlacademy.ru/blog/css/short-16' target='_blank' rel='noopener noreferrer'>Адаптивная вёрстка,</a><a class='question__link' href='https://habr.com/ru/articles/269419/' target='_blank' rel='noopener noreferrer'>Почему Mobile First?</a></p>",
    source: 'ChallengeMe',
    href: 'https://chm.org.ua/ru/voprosy-na-sobesedovanie-css/',
    category: 'ChallengeMe'
  },
  {
    id: 35,
    question: 'Какие вы знаете способы для улучшения производительности загрузки веб-страниц?',
    answer: '<p> </p>',
    source: '',
    href: '',
    category: ''
  },
  {
    question: '',
    answer: '<p></p>',
    source: 'ChallengeMe',
    href: '',
    category: 'ChallengeMe'
  },
  {
    question: '',
    answer: '<p></p>',
    source: 'copilot',
    href: '',
    category: 'copilot'
  },
  {
    question: '',
    answer: '<p></p>',
    source: 'chatgpt',
    href: '',
    category: 'chatgpt'
  },
  { question: '', answer: '', source: '', href: '', category: '' }
]

// const addDataCategory = (arr) => {
//   arr.forEach((item) => {
//     item.category = item.source;
//   });
// };

// addDataCategory(questionCSS);
// console.log(questionCSS);


export { questionCSS };
