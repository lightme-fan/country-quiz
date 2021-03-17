import React, { createContext, useEffect, useRef, useState } from 'react'
import useFetchData from './customHooks/useFetchData';

const Context = createContext()

function ContextProvider({children}) {
    const [ quizData, fetchData ] = useFetchData()
    const [ quizScore, setScore ] = useState(0)  
    const [ nextbutton, setNextbutton ] = useState(false)
    const [ isNextPageShown, setNextPage ] = useState(false)
    const [ isScoreShown, setShowScore ] = useState(false)
    const [ isCorrect, setIsCorrect ] = useState(false)
    
    function handleClick(e) {
        const userGuess = e.target
        setNextbutton(true)

        // Grab the four buttons
        const buttons = Array.from(document.querySelectorAll(".btn"))
        console.log(buttons);
        // Find the right answer in order to compare with the value of each button
        const foundedAnswer = quizData.find(quiz => quiz.correctAnswer)
        
        // Comparison if what is clicked and the correct answer are the same
        // buttons.classList.add('disabledButton')
        if (userGuess.value === foundedAnswer.correctAnswer) {
            // Add class name to the correct answer 
            setScore(prev => prev + 1)
            userGuess.setAttribute('id','true')
            setIsCorrect(true)
            buttons.map(button => button.classList.add('disabledButton'))
        }
        
        // Comparison if what is clicked and the correct answer are not the same
        if (userGuess.value !== foundedAnswer.correctAnswer) {
            // Add class name to the incorrect answer
            userGuess.setAttribute('id','untrue')
            setIsCorrect(false)
            // Show the correct answer if what has been clicked is not the correct answer
            setTimeout(() => {
                const findTrueBtn = buttons.find(button => button.value === foundedAnswer.correctAnswer)
                findTrueBtn.setAttribute('id', 'true')
            }, 700);
            
            setShowScore(true)
            // To disable all buttons once one of them is clicked
            buttons.map(button => button.classList.add('disabledButton'))
        }       
        buttons.map(button => button.classList.add('stop-hovering'))

    }

    // Handle next button
    function handleNextButton (e) {
        fetchData()
    }

    function handleTryAgain(e) {
        fetchData()
        setScore(0)
    }

    return (
        <Context.Provider 
            value={{
                isCorrect,
                quizData, 
                nextbutton, 
                isNextPageShown, 
                quizScore, 
                setScore, 
                isScoreShown, 
                handleClick, 
                handleNextButton, 
                handleTryAgain
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
