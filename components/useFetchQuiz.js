import React, { useEffect, useState } from 'react';
import ButtonNext from '../Test';
import NextButton from './NextButton';
import quizQuestions from './Quiz-question'
import Results from './TryAgain';

const API_url = 'https://restcountries.eu/rest/v2/all'

function useFetchQuiz() {
    const [ quizes, setQuiz ] = useState([]) 
    const [ score, setScore ] = useState(0)  
    const [ button, setbutton ] = useState(false)
    const [ isCorrect, setIsCorrect ] =useState(false)
    const [ nextPage, setNextPage ] = useState(false)
    const [ classList, setClass ] = useState('')
    
    async function fetchData(id) {
        const response = await fetch(API_url)
        const result = await response.json()

        // Randomizing questions
        const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
        
        // Randomizing answers
        const randomizingAnswers = result[Math.floor(Math.random() * result.length)]
        
        // Randomizing option of answers
        const opt1 = result[Math.floor(Math.random() * result.length)];
        const opt2 = result[Math.floor(Math.random() * result.length)];
        const opt3 = result[Math.floor(Math.random() * result.length)];
        
        // Answers
        const options = [ randomizingAnswers.name, opt1.name, opt2.name, opt3.name]
        const sortedOptions = options.sort(() => { return 0.5 - Math.random() });

        const quizObj = {
            question: randomQuestion,
            countries: randomizingAnswers,
            flag: randomizingAnswers.flag,
            capital: randomizingAnswers.capital,
            answers: sortedOptions,
            correctAnswer: randomizingAnswers.name,
            userAnswer: '',
        }

        // Set state
        setQuiz([quizObj])

    }
    
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])

    
    function handleTrueValue(e) {
        const userGuess = e.target
        setbutton(true)
        const findAnswer = quizes.find(quiz => quiz.correctAnswer);
   
        if (userGuess.value == findAnswer.correctAnswer) {
            userGuess.classList.add('true')
            console.log(findAnswer.correctAnswer);
            setIsCorrect(true)
            userGuess.classList.add('untrue') 
        }
    }

    function handleFalseValue(e) {        
        const userGuess = e.target
        setbutton(true)
        const findAnswer = quizes.find(quiz => quiz.correctAnswer);
    
        if (userGuess !== findAnswer.correctAnswer) {
            userGuess.classList.add('untrue')
            findAnswer.correctAnswer           
        }
    }

    function handleClick(e) {                 
        handleTrueValue(e)
        handleFalseValue(e)
    }
    
    function handleNextButton (e) {
        const userGuess = e.target
        // console.log(userGuess.value);
        // const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        // console.log(findAnswer.correctAnswer);
        // setScore(prev => prev + 1)
        // setIsCorrect(true)
        // fetchData()
        const buttons = Array.from(document.querySelectorAll(".btn"))
        const findButtomValue = buttons.find(button => button.classList)
        const foundValue = findButtomValue.value;
        const trueValue = handleTrueValue(e)
        if (foundValue) {
            console.log(foundValue);
            console.log(userGuess.value);
            fetchData()
        }
        
    }
    console.log(quizes);
    
    return [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton]
}

export default useFetchQuiz