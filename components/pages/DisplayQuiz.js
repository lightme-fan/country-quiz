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
                    <span>A</span>
                    {answers[0]}
                    <span>{icon}</span>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[1]} onClick={onClick}>
                    <span>B</span>
                    {answers[1]}   
                    <span>{icon}</span>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[2]} onClick={onClick}>
                    <span>C</span>
                    {answers[2]}
                    <span>{icon}</span>
                </button><br/>

                <button className='btn'  ref={buttonRef} value={answers[3]} onClick={onClick}>
                    <span>D</span>
                    {answers[3]}
                    <span>{icon}</span>
                </button>
            </div>
        </>
    )
}

export default DisplayQuiz
