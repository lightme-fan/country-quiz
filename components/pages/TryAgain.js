import React from 'react'
import useFunctionalities from '../customHooks/useFunctionalities'
import { Link } from 'react-router-dom'
import win from '../../wini.svg' 

function TryAgain() {
    // Grab custom hooks
    const [ 
        quizData, 
        nextbutton, 
        isNextPageShown, 
        score, 
        setScore, 
        handleClick, 
        handleNextButton
    ] = useFunctionalities() 
    console.log(score);

    return (
        <div className='container result'>
            <img src={win} alt='quiz'/>
            <h2 className='result--heading'>Result</h2>
            <p className='result--text'>You got <span>{score}</span> correct answers</p>
            <Link to='/backtohome'><button className='result--button'>Try again</button></Link>
        </div>
    )
}

export default TryAgain