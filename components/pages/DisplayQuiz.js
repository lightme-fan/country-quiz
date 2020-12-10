import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Context } from '../ContextProvider'

function DisplayQuiz({background, flag, question, correctAnswer, classList, capital, answers, onClick, icon, buttonRef}) {
        
    return (
        <>
            {question.question1 ? 
                <h3 className='question'>{capital} {question.question1}</h3> : 
                <div><img className='question-image' src={flag} alt={capital} /><h3 className='question'>{question.question2}</h3></div>
            }
            <div className='buttons'>
                <button className='btn'  ref={buttonRef} value={answers[0]} onClick={onClick}>
                    <div>A</div>
                    <div>{answers[0]}</div>
                    <div>{icon}</div>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[1]} onClick={onClick}>
                    <div>B</div>
                    <div>{answers[1]}</div>   
                    <div>{icon}</div>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[2]} onClick={onClick}>
                    <div>C</div>
                    <div>{answers[2]}</div>
                    <div>{icon}</div>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[3]} onClick={onClick}>
                    <div>D</div>
                    <div>{answers[3]}</div>
                    <div>{icon}</div>
                </button>
            </div>
        </>
    )
}

export default DisplayQuiz
