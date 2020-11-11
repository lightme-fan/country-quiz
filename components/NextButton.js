import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFetchQuiz from './useFetchQuiz'

function NextButton({ nextPage, isCorrect,  onClick, correctAnswer, resultOnClick }) {

    return (
        <>  
            {!isCorrect && correctAnswer ?
                <button value={correctAnswer} className='next-button' onClick={onClick}>
                    Next
                </button> :
                <Link to='/result'>
                    <button className='next-button' value={correctAnswer} onClick={resultOnClick}>
                        Next
                    </button>
                </Link> 
            }
        </>
    )
}

export default NextButton