import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFetchQuiz from './useFetchQuiz'

function NextButton({ correctAnswer }) {
    const [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz()
    return (
        <>  
            {isCorrect ?
                <button value={correctAnswer} className='next-button' onClick={handleNextButton}>
                    Next
                </button>
                :
                <Link className='next-button--anchor' to='/tryagain'>
                    <button className='next-button'>
                        Next
                    </button>
                </Link> 
            }
        </>
    )
}

export default NextButton