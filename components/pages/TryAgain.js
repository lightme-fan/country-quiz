import React from 'react'
import useFetchQuiz from '../customHooks/useFetchQuiz'
import { Link } from 'react-router-dom'

function TryAgain() {
    const [classList, quizData, nextbutton, isNextPageShown, score, setScore, handleClick, handleNextButton, handleNextToTryAgain] = useFetchQuiz() 
    console.log(score);
    return (
        <div className='container result'>
            <h2 className='result--heading'>Result</h2>
            <p className='result--text'>You got <span>{handleNextToTryAgain(prev => prev + 1)}</span> correct answers</p>
            <Link to='/backtohome'><button className='result--button'>Try again</button></Link>
        </div>
    )
}

export default TryAgain