import React from 'react'
import useFetchQuiz from './useFetchQuiz'
import { Link } from 'react-router-dom'

function TryAgain({ scores, onClick}) {
    const [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    return (
        <div className='container result'>
            <h2 className='result--heading'>Result</h2>
            <p className='result--text'>You got <span>{score}</span> correct answers</p>
            <Link to='/backtohome'><button className='result--button'>Try again</button></Link>
        </div>
    )
}

export default TryAgain