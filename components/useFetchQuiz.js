import React, { useEffect, useState } from 'react';
import quizQuestions from './Quiz-question'

const API_url = 'https://restcountries.eu/rest/v2/all'

function useFetchQuiz() {
    const [ quizes, setQuiz ] = useState([])  
    
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

        // Question
        const allQuestions = [ randomQuestion.question1 ? `${randomizingAnswers.capital} ${randomQuestion.question1}` : `${randomQuestion.question2}`]
        // const allQuestions = [ `${randomQuestion.question1}`, `${randomQuestion.question2}`]
        
        const quizObj = {
            question: randomQuestion,
            countries: randomizingAnswers,
            flag: randomizingAnswers.flag,
            capital: randomizingAnswers.capital,
            answers: sortedOptions,
            correctAnswer: randomizingAnswers.name,
            isCorrect: true
        }
        // Set state
        setQuiz([quizObj])

    }
    
    // useEffect
    useEffect(() => {
        fetchData()
    }, [])
    
    return [quizes]
}

export default useFetchQuiz