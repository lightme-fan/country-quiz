import {useState, useEffect} from 'react';
import quizQuestions from './Components/Questions';
function useQuiz() {
  // I initialise the varibles
  const [quizes, setQuizes ] = useState([]);
  const [score, setScore] = useState(0)
  const [showNextPage, setShowNextPage] = useState(false);
  // Fetch the countries
  async function getcountries() {
    const endpoint = "https:restcountries.eu/rest/v2/all" ;
    const res = await fetch(endpoint);
    const data = await res.json();
    // I randomised the country data that I have fetched
    const randomQuizes = data[Math.floor(Math.random() * data.length)];
    const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
    const randomOpt1 = data[Math.floor(Math.random() * data.length)];
    const randomOpt2 = data[Math.floor(Math.random() * data.length)];
    const randomOpt3 = data[Math.floor(Math.random() * data.length)];
    const randomOptions = [randomQuizes.name, randomOpt1.name, randomOpt2.name, randomOpt3.name];
    const sortedQuizOptions = randomOptions.sort(() => { return 0.5 - Math.random() });
    // I initialed the variables thatI am going to push in my state
    const quizObject = {
      countries: randomQuizes,
      question: randomQuestion,
      answers: sortedQuizOptions,
      correctAnswers: randomQuizes.name,
      images: randomQuizes.flag,
      capital: randomQuizes.capital,
      isCorrect: false,
    }
    setQuizes([quizObject]);
  }
  useEffect(() => {
    getcountries()
  }, [])
  // I find the correct answer that I am going to compare with the button id
  const findCountryName = quizes.find(quiz => quiz.correctAnswers);
  // This is function that will toggle the background and increase the score when the it's true
  function handleClick(e) {
    const btn = e.target;
    setShowNextPage(true);
    // check if the button value is the same as the country name
    if (btn.id === findCountryName.correctAnswers) {
      btn.style.backgroundColor = '#004643';
      setScore((prev) => prev + 1)
    } else if(btn.id !== findCountryName.correctAnswers) {
      btn.style.backgroundColor = '#E16162';
    }
  }
  // This function will display the next page
  function HandleNextPage(e) {
    getcountries()
    const btn = e.target;
    const findAnswer = quizes.find(quiz => quiz.correctAnswers);
    if (findAnswer === btn.id) {
    }
  }
  // Return the variables and the function names that are needed
  return [quizes,
    score,
    showNextPage,
    HandleNextPage,
    handleClick
  ]
  }
  