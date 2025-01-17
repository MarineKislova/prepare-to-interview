function displayQuestion(data, questionContainer, answerContainer) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuestion = data[randomIndex].question;
    const randomAnswer1 = data[randomIndex].answer.answer1;
    const randomAnswer2 = data[randomIndex].answer.answer2;
    const randomAnswer3 = data[randomIndex].answer.answer3;
    const modalQuestion = document.getElementById(questionContainer);
    const modalAnswer = document.getElementById(answerContainer);

    modalQuestion.textContent = randomQuestion;
    modalAnswer.innerHTML = `<p class="answer-text" data-answer="${randomAnswer1}"> <span> Ответ 1: </span> ${randomAnswer1} </p>
    <p class="answer-text" data-answer="${randomAnswer2}"> <span> Ответ 2: </span> ${randomAnswer2}</p>
    <p class="answer-text" data-answer="${randomAnswer3}"> <span> Ответ 3: </span> ${randomAnswer2}</p>`;
  }

  export default displayQuestion;