import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState([
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyperlinking Text Marking Language"
      ],
      correctAnswer: "Hyper Text Markup Language",
    },
    {
      question: "Which language is primarily used for styling web pages?",
      options: ["HTML", "JQuery", "CSS", "XML"],
      correctAnswer: "CSS",
    },
    {
      question: "What is the value of the binary number 1010 in decimal?",
      options: ["10", "12", "8", "15"],
      correctAnswer: "10",
    },
    {
      question: "Which of the following is a JavaScript framework?",
      options: ["Django", "React", "Laravel", "Flask"],
      correctAnswer: "React",
    },
    {
      question: "What does CPU stand for in computer science?",
      options: [
        "Central Process Unit",
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Processor Unit"
      ],
      correctAnswer: "Central Processing Unit",
    },
    {
      question: "Which data structure uses FIFO (First In First Out) principle?",
      options: ["Stack", "Queue", "Tree", "Graph"],
      correctAnswer: "Queue",
    },
    {
      question: "What is the main purpose of an operating system?",
      options: [
        "To manage computer hardware and software resources",
        "To write code",
        "To browse the internet",
        "To compile programs"
      ],
      correctAnswer: "To manage computer hardware and software resources",
    },
    {
      question: "Which sorting algorithm has the best average case time complexity?",
      options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
      correctAnswer: "Quick Sort",
    },
    {
      question: "In object-oriented programming, what does 'inheritance' mean?",
      options: [
        "A class acquiring properties and behaviors from another class",
        "A function calling itself",
        "Data hiding",
        "Overloading operators"
      ],
      correctAnswer: "A class acquiring properties and behaviors from another class",
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Structured Query Language",
        "Strong Question Language",
        "Structured Question Language",
        "Simple Query Language"
      ],
      correctAnswer: "Structured Query Language",
    },
  ]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleFinishQuiz = () => {
    alert(`Your score: ${score} out of ${quizData.length}`);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  useEffect(() => {
    // Auto transition to next question after 1 second
    if (selectedAnswer !== null && currentQuestionIndex < quizData.length - 1) {
      setTimeout(() => {
        handleNextQuestion();
      }, 1000);
    }
  }, [selectedAnswer, currentQuestionIndex, quizData.length]);

  return (
    <div className="quiz-container">
      {currentQuestionIndex < quizData.length ? (
        <motion.div
          className="question-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="question">
            {quizData[currentQuestionIndex].question}
          </h2>
          <div className="options">
            {quizData[currentQuestionIndex].options.map((option, index) => (
              <motion.button
                key={index}
                className={`option ${selectedAnswer === option ? "selected" : ""}`}
                onClick={() => handleAnswerSelection(option)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {option}
              </motion.button>
            ))}
          </div>

          {selectedAnswer && (
            <motion.div
              className="next-button-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                className="next-button"
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Next Question
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      ) : (
        <motion.div
          className="finish-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Congratulations!</h2>
          <p>Your final score is {score} out of {quizData.length}.</p>
          <motion.button
            className="finish-button"
            onClick={handleFinishQuiz}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Finish Quiz
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default QuizComponent;
