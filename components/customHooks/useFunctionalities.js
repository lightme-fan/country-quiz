import React, { useEffect, useState } from 'react';
import useFetchData from './useFetchData';

function useFunctionalities() {
    const [ quizData, fetchData ] = useFetchData()
    const [ quizScore, setScore ] = useState(0)  
    const [ nextbutton, setNextbutton ] = useState(false)
    const [ isNextPageShown, setNextPage ] = useState(false)
    const [ isScoreShown, setShowScore ] = useState(false)
    
    function handleClick(e) {
        const userGuess = e.target
        setNextbutton(true)
        
        // Grab the four buttons
        const buttons = Array.from(document.querySelectorAll(".btn"))
        
        // Find the right answer in order to compare with the value of each button
        const foundedAnswer = quizData.find(quiz => quiz.correctAnswer);

        // Comparison if what is clicked and the correct answer are the same
        if (userGuess.value == foundedAnswer.correctAnswer) {
            // Add class name to the correct answer 
            userGuess.classList.add('true')
            foundedAnswer.isCorrect = true
        }
        
        // Comparison if what is clicked and the correct answer are not the same
        if (userGuess !== foundedAnswer.correctAnswer) {
            // Add class name to the incorrect answer
            userGuess.classList.add('untrue')

            // Show the correct answer if what has been clicked is not the correct answer
            setTimeout(() => {
                const findTrueBtn = buttons.find(button => button.value === foundedAnswer.correctAnswer)
                findTrueBtn.classList.add('true')
            }, 700);
            
            setShowScore(true)
            // To disable all buttons once one of them is clicked
            buttons.map(button => button.classList.add('disabledButton'))
        }       
    }

    
    // Handle next button
    function handleNextButton (e) {
        fetchData()
    }

    // Handle next button
    function handleTryAgain(e) {
        const nextBtn = e.target.value
        const foundedAnswer = quizData.find(quiz => quiz.correctAnswer);
        console.log(foundedAnswer);
        const buttons = Array.from(document.querySelectorAll(".btn"))
        const findTrueBtn = buttons.find(button => button.value === foundedAnswer.correctAnswer)
        
    }

    console.log(quizScore);
    console.log(quizData);
    
    return [
        quizData, 
        nextbutton, 
        isNextPageShown, 
        quizScore, 
        setScore, 
        isScoreShown, 
        handleClick, 
        handleNextButton, 
        handleTryAgain
        ]
}

export default useFunctionalities