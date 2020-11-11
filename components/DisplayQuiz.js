import React from 'react'
import { Link } from 'react-router-dom'

function DisplayQuiz({background, flag, question, correctAnswer, classList, capital, answers, onClick}) {
    return (
        <>
            {question.question1 ? 
                <h3 className='question'>{capital} {question.question1}</h3> : 
                <div><img className='question-image' src={flag} alt={capital} /><h3 className='question'>{question.question2}</h3></div>
            }
            <div className='buttons'>
                <button className='btn' value={answers[0]} onClick={onClick}>{answers[0]}</button><br />
                <button className='btn' value={answers[1]} onClick={onClick}>{answers[1]}</button><br/>
                <button className='btn' value={answers[2]} onClick={onClick}>{answers[2]}</button><br/>
                <button className='btn' value={answers[3]} onClick={onClick}>{answers[3]}</button>
            </div>
        </>
    )
}

export default DisplayQuiz

// style={background}
// style={background}
// style={background}
// style={background}