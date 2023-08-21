$(document).ready(function() {
  var questions = [
    { question: "What is 2 + 2?", options: ["A) 3", "B) 4", "C) 5", "D) 6"] },
    { question: "Which planet is known as the 'Red Planet'?", options: ["A) Venus", "B) Mars", "C) Jupiter", "D) Saturn"] },
    // Add more questions here
  ];
  
  var currentQuestion = 0;
  var questionContainer = $("#question-container");
  
  function showQuestion(index) {
    var question = questions[index];
    var questionElement = questionContainer.find(".question");
    var optionsElement = questionContainer.find(".options");
    
    questionElement.text(question.question);
    optionsElement.empty();
    
    question.options.forEach(function(option) {
      optionsElement.append(`<div class="option">${option}</div>`);
    });
    
    questionElement.fadeTo(500, 1);
    optionsElement.fadeTo(500, 1);
  }
  
  function transitionToNextQuestion() {
    var questionElement = questionContainer.find(".question");
    var optionsElement = questionContainer.find(".options");
    
    questionElement.fadeTo(500, 0, function() {
      optionsElement.fadeTo(500, 0, function() {
        currentQuestion++;
        if (currentQuestion < questions.length) {
          showQuestion(currentQuestion);
        } else {
          questionContainer.fadeOut(500);
        }
      });
    });
  }
  
  showQuestion(currentQuestion);
  
  questionContainer.on("click", ".option", function() {
    transitionToNextQuestion();
  });
});
