import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFunctionalities from '../customHooks/useFunctionalities'

function NextButton({isCorrect, correctAnswer, nextButtonOnClick, clickNextBtn }) {
    const [ 
        quizData, 
        nextbutton, 
        isNextPageShown, 
        quizScore, 
        setScore, 
        isScoreShown,
        handleClick, 
        handleNextButton,
        handleTryAgain
    ] = useFunctionalities()

    return (
        <>  
            {isCorrect ?
                <button value={correctAnswer} className='next-button' onClick={nextButtonOnClick}>
                    Next
                </button>
                :
                <Link className='next-button--anchor'  to='/tryagain'>
                    <button className='next-button' value={correctAnswer} onClick={handleTryAgain}>
                        Next
                    </button>
                </Link>}

        </>
    )
}

export default NextButton