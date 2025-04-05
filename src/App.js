import React, { useEffect ,useState} from "react";
import ReactGA from "react-ga4"; // Import GA4 library
import './App.css';

const questions = [
  {
    question: "ما التصريف الثاني للفعل 'go'؟",
    options: ["goes", "going", "went", "gone"],
    answer: "went"
  },
  {
    question: "ما التصريف الثالث للفعل 'eat'؟",
    options: ["ate", "eaten", "eats", "eating"],
    answer: "eaten"
  },
  {
    question: "ما التصريف الثاني للفعل 'see'؟",
    options: ["saw", "seen", "seeing", "sees"],
    answer: "saw"
  },
  {
    question: "ما التصريف الثالث للفعل 'write'؟",
    options: ["written", "wrote", "writes", "writing"],
    answer: "written"
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
      
        <p>نحن نبحث عن طلاب من أجل إعطاء وجهات النظر في تطوير الموقع</p>
        <p>هل ترغب في المشاركة؟</p>
      
        {/* زر WhatsApp */}
        <a
          href="https://wa.me/+13136775744?text=مرحباً، أرغب في المشاركة في تطوير الموقع."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <button>تواصل عبر واتساب</button>
        </a>
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
