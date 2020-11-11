import React from 'react'
import useFetchQuiz from './useFetchQuiz'
import { Link } from 'react-router-dom'

function Results({ scores, onClick}) {
    const [classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    return (
        <div className='container result'>
            <h2 className='result--heading'>Result</h2>
            <p className='result--text'>You got <span>{score}</span> correct answers</p>
            <Link to='/home'><button className='result--button'>Try again</button></Link>
        </div>
    )
}

export default Results