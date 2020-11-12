import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFetchQuiz from '../customHooks/useFetchQuiz'

function NextButton({isCorrect, correctAnswer, nextButtonOnClick, clickNextBtn }) {
    // const [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz()
    return (
        <>  
            {isCorrect ?
                <button value={correctAnswer} className='next-button' onClick={nextButtonOnClick}>
                    Next
                </button>
                :
                <Link className='next-button--anchor' value={correctAnswer} onClick={clickNextBtn} to='/tryagain'>
                    <button className='next-button'>
                        Next
                    </button>
                </Link>}

        </>
    )
}

export default NextButton