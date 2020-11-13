import React, {useState, useEffect} from 'react'
import quizQuestions from '../pages/Quiz-question'
const API_url = 'https://restcountries.eu/rest/v2/all'

function FetchingData() {
    const [ quizData, setQuizData ] = useState([]) 

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
        }

        // Set state
        setQuizData([quizDataObject])

    }
    
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])

    return [ quizData, fetchData ]

}

export default FetchingData