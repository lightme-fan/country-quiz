import React, { useEffect, useState } from 'react';
import NextButton from './NextButton';
import quizQuestions from './Quiz-question'
import Results from './Results';

const API_url = 'https://restcountries.eu/rest/v2/all'

function useFetchQuiz() {
    const [ quizes, setQuiz ] = useState([]) 
    const [ score, setScore ] = useState(0)  
    const [ button, setbutton ] = useState(false)
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
            isCorrect: true,
        }

        // Set state
        setQuiz([quizObj])

    }
    
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])

    function handleClick(e) {
        const userGuess = e.target
        setbutton(true)
        const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        
        if (userGuess.value == findAnswer.correctAnswer) {
            userGuess.classList.add('true')
            setScore(prev => prev + 1)
            console.log(score);
        } else if (userGuess !== findAnswer.correctAnswer) {
            userGuess.classList.add('untrue')           
        } 
    }
    
    function handleNextButton (e) {
        const userGuess = e.target
        const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        
        if (userGuess.value === findAnswer.correctAnswer) {
            console.log(score);
            fetchData()
        } 
    }
    
    return [classList, quizes, button, nextPage, score, handleClick, handleNextButton]
}

export default useFetchQuiz