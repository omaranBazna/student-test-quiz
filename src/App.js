import React, { useEffect ,useState} from "react";
import ReactGA from "react-ga4"; // Import GA4 library
import './App.css';

const questions = [
  {
    question: "ما ناتج ٣ + ٥؟",
    options: ["٦", "٨", "٧", "٩"],
    answer: "٨"
  },
  {
    question: "ما ناتج ١٢ ÷ ٤؟",
    options: ["٢", "٣", "٤", "٥"],
    answer: "٣"
  },
  {
    question: "ما ناتج ٩ × ١؟",
    options: ["١٠", "٩", "٨", "١"],
    answer: "٩"
  },
  {
    question: "ما ناتج ٧ - ٣؟",
    options: ["٤", "٣", "٥", "٢"],
    answer: "٤"
  },
  {
    question: "ما ناتج ٦ + ٢؟",
    options: ["٧", "٨", "٩", "٦"],
    answer: "٨"
  },
  {
    question: "ما ناتج ٥ × ٢؟",
    options: ["١٠", "٩", "٨", "٧"],
    answer: "١٠"
  },
  {
    question: "ما ناتج ١٠ ÷ ٢؟",
    options: ["٤", "٥", "٦", "٣"],
    answer: "٥"
  },
  {
    question: "ما ناتج ٣ + ٧؟",
    options: ["٩", "١٠", "٨", "١١"],
    answer: "١٠"
  },
  {
    question: "ما ناتج ٤ × ٣؟",
    options: ["١٢", "١٤", "١٠", "١١"],
    answer: "١٢"
  },
  {
    question: "ما ناتج ١٥ - ٥؟",
    options: ["١١", "١٠", "٩", "٨"],
    answer: "١٠"
  }
];


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Initialize Google Analytics
  useEffect(() => {
    ReactGA.initialize("G-CLK9EY7GJP");  // Replace with your GA4 ID
    ReactGA.send("pageview");
  }, []);

  const handleAnswerClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">اختبار الرياضيات</h1>
      {showResult ? (
        <div className="result-container">
          <h2>انتهى الاختبار!</h2>
          <p>درجتك: {score} من {questions.length}</p>
        </div>
      ) : (
        <div className="question-container">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options-container">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswerClick(option)}
                className="option-btn"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
