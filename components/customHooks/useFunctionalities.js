import React, { useEffect, useState } from 'react';
import useFetchData from './useFetchData';

function useFunctionalities() {
    const [ quizData, fetchData ] = useFetchData()
    const [ score, setScore ] = useState(0)  
    const [ nextbutton, setNextbutton ] = useState(false)
    const [ isNextPageShown, setNextPage ] = useState(false)
    
    function handleClick(e) {
        const userGuess = e.target
        setNextbutton(true)

        // Grab the four buttons
        const buttons = Array.from(document.querySelectorAll(".btn"))

        // Find the right answer in order to compare with the value of each button
        const foundndAnswer = quizData.find(quiz => quiz.correctAnswer);

        // Comparison if what is clicked and the correct answer are the same
        if (userGuess.value == foundndAnswer.correctAnswer) {
            // Add class name to the correct answer 
            userGuess.classList.add('true')
            foundndAnswer.isCorrect = true
            setScore(score + 1)
        }
        
        // Comparison if what is clicked and the correct answer are not the same
        if (userGuess !== foundndAnswer.correctAnswer) {
            // Add class name to the incorrect answer
            userGuess.classList.add('untrue')
            
            // Show the correct answer if what has been clicked is not the correct answer
            setTimeout(() => {
                const findTrueBtn = buttons.find(button => button.value === foundndAnswer.correctAnswer)
                findTrueBtn.classList.add('true')
            }, 700);
            
            // To disable all buttons once one of them is clicked
            buttons.map(button => button.classList.add('disabledButton'))
        }       
    }
    
    // Handle next button
    function handleNextButton (e) {
        fetchData()
    }
    
    console.log(score);
    console.log(quizData);
    
    return [quizData, nextbutton, isNextPageShown, score, setScore, handleClick, handleNextButton]
}

export default useFunctionalities