// ---------- QUESTION BANK (sample, yours can be 140+) ----------

function showTopicInfo(topic) {
    selectedTopic = topic;
        document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("topicInfo").style.display = "block";
    document.getElementById("quizContainer").style.display = "none";

    const title = document.getElementById("topicTitle");
    const desc = document.getElementById("topicDesc");
    document.getElementById("topicTitle").innerText = topic + " Quiz";
    document.getElementById("topicDesc").innerText =
        "You will get 10 questions. Each question has a timer.";
    

    const descriptions = {
        Finance: "This quiz tests your general awareness of important facts from history, geography, science, and current affairs.It helps improve memory, awareness, and quick recall of commonly asked GK questions.",
        GK: "This quiz covers a wide range of topics including polity, economy, science, and social issues.It is designed to evaluate your conceptual clarity and overall understanding of general studies subjects",
        GS: "This quiz covers a wide range of topics including polity, economy, science, and social issues.It is designed to evaluate your conceptual clarity and overall understanding of general studies subjects.",
        AI:"Explore the fundamentals of Artificial Intelligence through carefully selected questions covering learning algorithms and AI applications.Start the quiz to test your knowledge and improve your conceptual clarity.",
        All: "This quiz includes a mixed set of questions from Finance, General Knowledge, and General Studies.It is ideal for overall assessment and full-length practice across multiple subjects."
    };

    title.innerText = topic + " Quiz";
    desc.innerText = descriptions[topic];
    console.log("Topic clicked:", topic);

}


const allQuestions = [
    /* ---------- AI (ARTIFICIAL INTELLIGENCE) ---------- */

{question:"What does AI stand for?",a:"Automated Intelligence",b:"Artificial Intelligence",c:"Advanced Internet",d:"Applied Informatics",correct:"b",category:"AI"},

{question:"Which of the following best defines Artificial Intelligence?",a:"Ability of machines to think like humans",b:"Programming computers",c:"Storing data",d:"Using internet",correct:"a",category:"AI"},

{question:"Which is a branch of Artificial Intelligence?",a:"Machine Learning",b:"Computer Networks",c:"Web Design",d:"Operating Systems",correct:"a",category:"AI"},

{question:"Machine Learning is a subset of?",a:"Data Science",b:"Artificial Intelligence",c:"Computer Graphics",d:"Cyber Security",correct:"b",category:"AI"},

{question:"What is Machine Learning?",a:"Learning done by humans",b:"Machines learning from data",c:"Manual programming",d:"Database storage",correct:"b",category:"AI"},

{question:"Which language is most commonly used in AI?",a:"HTML",b:"Python",c:"CSS",d:"PHP",correct:"b",category:"AI"},

{question:"What is Deep Learning?",a:"Learning deeply",b:"Subset of ML using neural networks",c:"Learning without data",d:"Manual coding",correct:"b",category:"AI"},

{question:"Which model is inspired by the human brain?",a:"Decision Tree",b:"Neural Network",c:"Compiler",d:"Router",correct:"b",category:"AI"},

{question:"What does NLP stand for in AI?",a:"Neural Language Processing",b:"Natural Language Processing",c:"Network Layer Protocol",d:"Non Linear Programming",correct:"b",category:"AI"},

{question:"Which of the following is an AI application?",a:"Calculator",b:"Text Editor",c:"Virtual Assistant",d:"Spreadsheet",correct:"c",category:"AI"},

{question:"Which company developed ChatGPT?",a:"Google",b:"Microsoft",c:"OpenAI",d:"Amazon",correct:"c",category:"AI"},

{question:"Which AI technique allows systems to improve automatically?",a:"Programming",b:"Machine Learning",c:"Debugging",d:"Data Entry",correct:"b",category:"AI"},

{question:"Which of the following is an example of supervised learning?",a:"Clustering",b:"Classification",c:"Association",d:"Dimensionality Reduction",correct:"b",category:"AI"},

{question:"Which learning method uses unlabeled data?",a:"Supervised Learning",b:"Reinforcement Learning",c:"Unsupervised Learning",d:"Deep Learning",correct:"c",category:"AI"},

{question:"What is Reinforcement Learning?",a:"Learning from rules",b:"Learning from labeled data",c:"Learning by reward and punishment",d:"Learning manually",correct:"c",category:"AI"},

{question:"Which AI field deals with images?",a:"NLP",b:"Computer Vision",c:"Robotics",d:"Expert Systems",correct:"b",category:"AI"},

{question:"Which AI system mimics human decision-making?",a:"Expert System",b:"Compiler",c:"Assembler",d:"Router",correct:"a",category:"AI"},

{question:"Which of the following is NOT an AI domain?",a:"Robotics",b:"Computer Vision",c:"Natural Language Processing",d:"Web Hosting",correct:"d",category:"AI"},

{question:"What is the main goal of Artificial Intelligence?",a:"Store data",b:"Automate tasks intelligently",c:"Increase hardware speed",d:"Build websites",correct:"b",category:"AI"},

{question:"Which algorithm is commonly used for classification?",a:"Linear Regression",b:"Decision Tree",c:"Bubble Sort",d:"Binary Search",correct:"b",category:"AI"},

{question:"What is a chatbot?",a:"Hardware device",b:"AI program for conversation",c:"Database system",d:"Network tool",correct:"b",category:"AI"},

{question:"Which AI technique is used in self-driving cars?",a:"Computer Vision",b:"Data Entry",c:"Text Formatting",d:"Web Design",correct:"a",category:"AI"},

{question:"Which of the following uses AI?",a:"Face Recognition",b:"Voice Assistants",c:"Recommendation Systems",d:"All of the above",correct:"d",category:"AI"},

{question:"What is the input for Machine Learning models?",a:"Rules",b:"Hardware",c:"Data",d:"Software",correct:"c",category:"AI"},

{question:"Which term refers to AI systems that learn continuously?",a:"Static AI",b:"Weak AI",c:"Adaptive AI",d:"Hardcoded AI",correct:"c",category:"AI"},


/* ---------- FINANCE & STOCK MARKET ---------- */
{question:"What is a stock?",a:"Loan to company",b:"Ownership in a company",c:"Company profit",d:"Company debt",correct:"b",category:"Finance"},
{question:"What does IPO stand for?",a:"Initial Public Offering",b:"Internal Profit Order",c:"Initial Price Offer",d:"Investment Public Option",correct:"a",category:"Finance"},
{question:"What is NSE?",a:"National Stock Exchange",b:"New Stock Entity",c:"National Share Exchange",d:"None",correct:"a",category:"Finance"},
{question:"Nifty 50 belongs to?",a:"BSE",b:"NYSE",c:"NSE",d:"NASDAQ",correct:"c",category:"Finance"},
{question:"What is a bull market?",a:"Falling prices",b:"Stable prices",c:"Rising prices",d:"Crash",correct:"c",category:"Finance"},
{question:"What is a bear market?",a:"Rising prices",b:"Stable prices",c:"Falling prices",d:"No trading",correct:"c",category:"Finance"},
{question:"What is dividend?",a:"Company loss",b:"Tax",c:"Profit paid to shareholders",d:"Broker fee",correct:"c",category:"Finance"},
{question:"What is market capitalization?",a:"Company debt",b:"Total value of company shares",c:"Annual profit",d:"Revenue",correct:"b",category:"Finance"},
{question:"What is SIP?",a:"Stock Investment Plan",b:"Systematic Investment Plan",c:"Savings Investment Policy",d:"Share Index Plan",correct:"b",category:"Finance"},
{question:"What is diversification?",a:"Investing in one stock",b:"Reducing risk",c:"Increasing risk",d:"Short-term trading",correct:"b",category:"Finance"},
{question:"What is ROE?",a:"Return on Equity",b:"Rate of Exchange",c:"Return on Expense",d:"Ratio of Earnings",correct:"a",category:"Finance"},
{question:"What is EPS?",a:"Earning Per Share",b:"Equity Per Share",c:"Expense Per Share",d:"Earning Price System",correct:"a",category:"Finance"},
{question:"What is face value of a share?",a:"Market price",b:"Book value",c:"Original value of share",d:"Trading value",correct:"c",category:"Finance"},
{question:"Who is a retail investor?",a:"Company",b:"Government",c:"Individual investor",d:"Foreign investor",correct:"c",category:"Finance"},
{question:"What does SEBI protect?",a:"Banks",b:"Government",c:"Investors",d:"Companies",correct:"c",category:"Finance"},
{question:"What is liquidity risk?",a:"Profit risk",b:"Risk of not selling asset easily",c:"Tax risk",d:"Inflation risk",correct:"b",category:"Finance"},
{question:"What is fundamental analysis?",a:"Price-based analysis",b:"Company financial analysis",c:"Chart reading",d:"Speculation",correct:"b",category:"Finance"},
{question:"What is technical analysis?",a:"Balance sheet analysis",b:"Chart & price analysis",c:"Company audit",d:"Tax analysis",correct:"b",category:"Finance"},
{question:"Long position means?",a:"Selling shares",b:"Buying shares",c:"No position",d:"Short selling",correct:"b",category:"Finance"},
{question:"Short selling means?",a:"Buying shares",b:"Holding shares",c:"Selling borrowed shares",d:"IPO buying",correct:"c",category:"Finance"},


/* ---------- GK ---------- */
{question:"Which is the largest state in India by area?",a:"Maharashtra",b:"Rajasthan",c:"Uttar Pradesh",d:"Madhya Pradesh",correct:"b", category:"GK"},
{question:"Who was the first Prime Minister of India?",a:"Rajendra Prasad",b:"Jawaharlal Nehru",c:"Sardar Patel",d:"Lal Bahadur Shastri",correct:"b", category:"GK"},
{question:"Which country has the largest population?",a:"India",b:"USA",c:"China",d:"Russia",correct:"a", category:"GK"},
{question:"Which is the tallest mountain in the world?",a:"K2",b:"Kangchenjunga",c:"Mount Everest",d:"Makalu",correct:"c", category:"GK"},
{question:"Who discovered gravity?",a:"Albert Einstein",b:"Isaac Newton",c:"Galileo",d:"Tesla",correct:"b", category:"GK"},
{question:"Which Indian city is called Silicon Valley of India?",a:"Hyderabad",b:"Pune",c:"Chennai",d:"Bengaluru",correct:"d", category:"GK"},
{question:"Which is the national bird of India?",a:"Peacock",b:"Eagle",c:"Sparrow",d:"Parrot",correct:"a", category:"GK"},
{question:"Which language has the most native speakers?",a:"English",b:"Hindi",c:"Spanish",d:"Mandarin",correct:"d", category:"GK"},

{question:"Capital of India?",a:"Mumbai",b:"Delhi",c:"New Delhi",d:"Kolkata",correct:"c", category:"GK"},
{question:"Who is the Father of Indian Constitution?",a:"Mahatma Gandhi",b:"Jawaharlal Nehru",c:"B. R. Ambedkar",d:"Rajendra Prasad",correct:"c", category:"GK"},
{question:"Largest ocean in the world?",a:"Indian",b:"Atlantic",c:"Arctic",d:"Pacific",correct:"d", category:"GK"},
{question:"National animal of India?",a:"Lion",b:"Elephant",c:"Tiger",d:"Leopard",correct:"c", category:"GK"},
{question:"Which planet is called Red Planet?",a:"Earth",b:"Mars",c:"Jupiter",d:"Venus",correct:"b", category:"GK"},
{question:"Currency of Japan?",a:"Yen",b:"Won",c:"Dollar",d:"Peso",correct:"a", category:"GK"},
{question:"Missile Man of India?",a:"Vikram Sarabhai",b:"Homi Bhabha",c:"A. P. J. Abdul Kalam",d:"C. V. Raman",correct:"c", category:"GK"},
{question:"National flower of India?",a:"Rose",b:"Lotus",c:"Lily",d:"Sunflower",correct:"b", category:"GK"},
{question:"Which gas is most abundant?",a:"Oxygen",b:"Nitrogen",c:"CO₂",d:"Hydrogen",correct:"b", category:"GK"},
{question:"Smallest prime number?",a:"0",b:"1",c:"2",d:"3",correct:"c", category:"GK"},

/* ---------- GS ---------- */
{question:"GDP stands for?",a:"Gross Domestic Product",b:"General Debt Plan",c:"Government Data Policy",d:"None",correct:"a",category:"GS"},
{question:"Who controls repo rate in India?",a:"SEBI",b:"RBI",c:"NSE",d:"Finance Ministry",correct:"b",category:"GS"},
{question:"Inflation means?",a:"Fall in prices",b:"Rise in prices",c:"Stable prices",d:"No money supply",correct:"b",category:"GS"},
{question:"Universal blood donor?",a:"A",b:"B",c:"AB",d:"O negative",correct:"d",category:"GS"},
{question:"Vitamin from sunlight?",a:"A",b:"B",c:"C",d:"D",correct:"d",category:"GS"},
{question:"Longest river in the world?",a:"Amazon",b:"Yangtze",c:"Nile",d:"Ganga",correct:"c",category:"GS"},
{question:"Largest desert?",a:"Thar",b:"Gobi",c:"Sahara",d:"Kalahari",correct:"c",category:"GS"},
{question:"SI unit of force?",a:"Joule",b:"Watt",c:"Newton",d:"Pascal",correct:"c",category:"GS"},
{question:"Voting age in India?",a:"21",b:"20",c:"19",d:"18",correct:"d",category:"GS"},
{question:"World Environment Day?",a:"June 5",b:"April 22",c:"March 21",d:"July 11",correct:"a",category:"GS"},
{question:"What is the tenure of Lok Sabha?",a:"4 years",b:"5 years",c:"6 years",d:"7 years",correct:"b",category:"GS"},
{question:"Who appoints the Governor of a state?",a:"Chief Minister",b:"Prime Minister",c:"President",d:"Chief Justice",correct:"c",category:"GS"},
{question:"Right to Education applies to which age group?",a:"6–14 years",b:"0–6 years",c:"14–18 years",d:"18–25 years",correct:"a",category:"GS"},
{question:"Which article deals with Right to Equality?",a:"Article 14",b:"Article 19",c:"Article 21",d:"Article 32",correct:"a",category:"GS"},
{question:"Which body conducts UPSC exams?",a:"SSC",b:"UPSC",c:"NTA",d:"State PSC",correct:"b",category:"GS"},
{question:"Which sector contributes most to India’s GDP?",a:"Agriculture",b:"Industry",c:"Services",d:"Mining",correct:"c",category:"GS"}


];

// ---------- DOM ELEMENTS ----------
const topicSelectEl = document.getElementById("topicSelect");
const quizContainerEl = document.getElementById("quizContainer");
let quizData = [];
let topicStats = {
    Finance: { total: 0, correct: 0 },
    GK: { total: 0, correct: 0 },
    GS: { total: 0, correct: 0 },
      AI: { total: 0, correct: 0 }
};

let selectedTopic = "";
const categoryEl = document.getElementById("category");
const counterEl = document.getElementById("counter");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const timerEl = document.getElementById("timer");

// ---------- SHUFFLE ----------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}



function startActualQuiz(topic) {
    let filteredQuestions;

    if (topic === "All") {
        filteredQuestions = [...allQuestions];
    } else {
        filteredQuestions = allQuestions.filter(q => q.category === topic);
        topicStats = {
            Finance: { total: 0, correct: 0 },
            GK: { total: 0, correct: 0 },
            GS: { total: 0, correct: 0 }
        };
    }

    shuffle(filteredQuestions);
    quizData = filteredQuestions.slice(0, 10);

    currentQuiz = 0;
    score = 0;

    loadQuiz();
}



// ---------- VARIABLES ----------
let currentQuiz = 0;
let score = 0;
let time = 10;
let timer;

// ---------- LOAD QUIZ ----------
function loadQuiz() {
    deselectAnswers();
    startTimer();
    document.getElementById("progress-bar").style.width =
    ((currentQuiz + 1) / quizData.length) * 100 + "%";

    categoryEl.innerText = quizData[currentQuiz].category;
    counterEl.innerText = `Question ${currentQuiz + 1} / ${quizData.length}`;
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
}

// ---------- DESELECT ----------
function deselectAnswers() {
    answerEls.forEach(el => el.checked = false);
}

// ---------- GET SELECTED ----------
function getSelected() {
    let selected = null;
    answerEls.forEach(el => {
        if (el.checked) selected = el.id;
    });
    return selected;
}

// ---------- TIMER ----------
function startTimer() {
    clearInterval(timer);
    time = 10;
    timerEl.innerText = `Time Left: ${time}s`;

    timer = setInterval(() => {
        time--;
        timerEl.innerText = `Time Left: ${time}s`;

        if (time === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// ---------- NEXT QUESTION ----------
function nextQuestion() {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

// ---------- SUBMIT ----------
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (!answer) return;

    const currentQuestion = quizData[currentQuiz];
    const correctAnswer = currentQuestion.correct;
    const category = currentQuestion.category;

    // count attempted question
    topicStats[category].total++;

    // highlight answers
    answerEls.forEach(el => {
        const li = el.parentElement;
        li.classList.remove("correct", "wrong");

        if (el.id === correctAnswer) {
            li.classList.add("correct");
        }
        if (el.checked && el.id !== correctAnswer) {
            li.classList.add("wrong");
        }
    });

    // count correct
    if (answer === correctAnswer) {
        score++;
        topicStats[category].correct++;
    }

    clearInterval(timer);

    setTimeout(() => {
        answerEls.forEach(el =>
            el.parentElement.classList.remove("correct", "wrong")
        );
        nextQuestion();
    }, 1000);
});


// ---------- RESULT ----------
function showResult() {
    clearInterval(timer);

    let analysisHTML = `
        <h2>Quiz Completed 🎉</h2>
        <p><strong>Total Score:</strong> ${score} / ${quizData.length}</p>
        <hr>
    `;

    for (let topic in topicStats) {
        if (topicStats[topic].total > 0) {
            analysisHTML += `
                <p><strong>${topic}:</strong>
                ${topicStats[topic].correct} / ${topicStats[topic].total}</p>
            `;
        }
    }

    analysisHTML += `
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;

    document.querySelector(".quiz-container").innerHTML = analysisHTML;
}



// ---------- START ----------
loadQuiz();

function restartQuiz() {
    clearInterval(timer);
    window.location.reload();
}


document.getElementById("startQuizBtn").addEventListener("click", function () {
    document.getElementById("topicInfo").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";

    startQuiz(selectedTopic);
});
function handleStartQuiz() {
    if (!selectedTopic) return;

    document.getElementById("topicInfo").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("welcomeScreen").style.display = "none";

    startQuiz(selectedTopic);
}
function startQuiz(topic) {
    let filteredQuestions;

    if (topic === "All") {
        filteredQuestions = [...allQuestions];
    } else {
        filteredQuestions = allQuestions.filter(
            q => q.category === topic
        );
    }

    shuffle(filteredQuestions);

    quizData = filteredQuestions.slice(0, 10);
    currentQuiz = 0;
    score = 0;

    loadQuiz();   // ✅ THIS MAKES THE QUESTION APPEAR
}





