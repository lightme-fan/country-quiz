import React from 'react'
import { Link } from 'react-router-dom'

function DisplayQuiz({background, flag, question, correctAnswer, classList, capital, answers, onClick, icon}) {
    return (
        <>
            {question.question1 ? 
                <h3 className='question'>{capital} {question.question1}</h3> : 
                <div><img className='question-image' src={flag} alt={capital} /><h3 className='question'>{question.question2}</h3></div>
            }
            <div className='buttons'>
                <button className='btn' value={answers[0]} onClick={onClick}>
                    <span>A</span>
                    <span>{answers[0]}</span>
                    <span>{icon}</span>
                </button><br/>

                <button className='btn' value={answers[1]} onClick={onClick}>
                    <span>B</span>
                    <span>{answers[1]}</span>   
                    <span>{icon}</span>
                </button><br/>

                <button className='btn' value={answers[2]} onClick={onClick}>
                    <span>C</span>
                    <span>{answers[2]}</span>
                    <span>{icon}</span>
                </button><br/>

                <button className='btn' value={answers[3]} onClick={onClick}>
                    <span>D</span>
                    <span>{answers[3]}</span>
                    <span>{icon}</span>
                </button>
            </div>
        </>
    )
}

export default DisplayQuiz
