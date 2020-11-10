import React from 'react'
import questions from './Quiz-question'
function DisplayQuiz({flag, question, capital, answers}) {
    return (
        <>
            {question.question1 ? 
                <h3 className='question'>{capital} {question.question1}</h3> : 
                <div><img className='question-image' src={flag} alt={capital} /><h3 className='question'>{question.question2}</h3></div>
            }
            <div className='buttons'>
                <button>{answers[0]}</button><br />
                <button>{answers[1]}</button><br/>
                <button>{answers[2]}</button><br/>
                <button>{answers[3]}</button>
            </div>
        </>
    )
}

export default DisplayQuiz