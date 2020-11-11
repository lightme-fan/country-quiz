import React from 'react'
import useFetchQuiz from './useFetchQuiz'

function Results() {
    const [classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    return (
        <div className='container result'>
            <h2 className='result--heading'>Result</h2>
            <p className='result--text'>You got <span>{score}</span> correct answers</p>
            <button className='result--button'>Try again</button>
        </div>
    )
}

export default Results