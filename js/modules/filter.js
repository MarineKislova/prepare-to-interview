function filter(button, filterSelector, ItemSelector) {
  const buttons = document.querySelectorAll(button);
  const items = document.querySelectorAll(ItemSelector);

//   if (!buttons.length || !items.length) {
//     console.error(
//       "Фильтр не найден! Проверь селекторы:",
//       button,
//       ItemSelector
//     );
//     return;
//   }
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute(filterSelector);
      console.log("Фильтр:", filter);

      items.forEach((item) => {
        console.log("Фильтр:", filter);
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
          console.log(`Показываю:`);
        } else {
          item.style.display = "none";
          console.log(`Скрываю:`);
        }
      });

      // Удаляем класс 'active' у всех кнопок и добавляем его только на текущую
      buttons.forEach((button) => button.classList.remove("active"));
      btn.classList.add("active");
    });
  });
}

export default filter;
