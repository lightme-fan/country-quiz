import React, { useEffect, useState } from 'react';
import quizQuestions from '../pages/Quiz-question'

const API_url = 'https://restcountries.eu/rest/v2/all'

function useFetchQuiz() {
    const [ quizData, setQuizData ] = useState([]) 
    const [ score, setScore ] = useState(0)  
    const [ nextbutton, setNextbutton ] = useState(false)
    const [ isNextPageShown, setNextPage ] = useState(false)
    const [ classList, setClass ] = useState('')
    
    async function fetchData(id) {
        const response = await fetch(API_url)
        const result = await response.json()

        // Randomizing questions
        const randomQuestion = quizQuestions[Math.floor(Math.random() * quizQuestions.length)]
        
        // Randomizing answers
        const randomAnswer = result[Math.floor(Math.random() * result.length)]
        
        // Randomizing option of answers
        const opt1 = result[Math.floor(Math.random() * result.length)];
        const opt2 = result[Math.floor(Math.random() * result.length)];
        const opt3 = result[Math.floor(Math.random() * result.length)];
        
        // Answers
        const answerOptions = [ randomAnswer.name, opt1.name, opt2.name, opt3.name]
        const sortedanswerOptions = answerOptions.sort(() => { return 0.5 - Math.random() });

        const quizDataObject = {
            question: randomQuestion,
            countries: randomAnswer,
            flag: randomAnswer.flag,
            capital: randomAnswer.capital,
            answers: sortedanswerOptions,
            correctAnswer: randomAnswer.name,
            userAnswer: '',
            isCorrect: false,
            newScore: 0
        }

        // Set state
        setQuizData([quizDataObject])

    }
    
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])

    const buttons = Array.from(document.querySelectorAll(".btn"))
    
    function handleClick(e) {
        const userGuess = e.target
        setNextbutton(true)
        const foundndAnswer = quizData.find(quiz => quiz.correctAnswer);
        if (userGuess.value == foundndAnswer.correctAnswer) {
            userGuess.classList.add('true')
            foundndAnswer.isCorrect = true
            userGuess.classList.add('untrue')
            setScore(score + 1)
            // buttons.map(button => button.classList.add('disabledButton'))
        }
        
        if (userGuess !== foundndAnswer.correctAnswer) {
            userGuess.classList.add('untrue')
            foundndAnswer.correctAnswer       
        }
        
        // const findButton = buttons.find(button => button.value)            
        // if (foundndAnswer.correctAnswer === findButton) {
        //     findButton.classList.add('true')
        //     buttons.map(button => button.classList.add('disabledButton'))
        // }
    }
    
    function handleNextButton (e) {
        const userGuess = e.target
        const foundndAnswer = quizData.find(quiz => quiz.correctAnswer);
        fetchData()
    }

    function handleNextToTryAgain() {
        console.log(score);
        return score
    }
    
    console.log(quizData);
    return [classList, quizData, nextbutton, isNextPageShown, score, setScore, handleClick, handleNextButton, handleNextToTryAgain]
}

export default useFetchQuiz