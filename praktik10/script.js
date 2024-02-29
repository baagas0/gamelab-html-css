const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll('button[id^="answer-"]');
const feedbackEl = document.getElementById("feedback");

// Sample quiz data
const quizData = [
    {
        question: "What is the capital of France?",
        correctAnswer: 3,
        answers: [
            "London",
            "Berlin",
            "Paris",
            "Rome"
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        correctAnswer: 1,
        answers: [
            "India",
            "China",
            "Japan",
            "Thailand"
        ]
    },
    // Add more questions as needed
];

// Current question index
let currentQuestion = 0;

// Function to load the current question
function loadQuestion() {
    const quiz = quizData[currentQuestion];

    // Set question text
    questionEl.textContent = quiz.question;

    // Set answer choices
    answerEls.forEach((answerEl, index) => {
        answerEl.textContent = quiz.answers[index];

        // Check if the answer is correct
        if (index === quiz.correctAnswer) {
            answerEl.dataset.correct = true;
        } else {
            answerEl.dataset.correct = false;
        }
    });

    // Hide feedback
    feedbackEl.textContent = "";
}

// Function to handle answer clicks
function handleAnswerClick(event) {
    const answerEl = event.target;
    const correct = answerEl.dataset.correct === "true";

    // Highlight the answer
    answerEls.forEach(answerEl => {
        answerEl.classList.toggle("correct", answerEl === answerEl);
        answerEl.classList.toggle("incorrect", !answerEl === answerEl && correct);
    });

    // Show feedback
    feedbackEl.textContent = correct ? "Correct!" : "Incorrect.";

    if(correct) {
        currentQuestion++;
        loadQuestion();
    }
}

// Load the first question
loadQuestion();

// Add event listeners to answer choices
answerEls.forEach(answerEl => answerEl.addEventListener("click", handleAnswerClick));