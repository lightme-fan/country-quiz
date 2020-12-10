import React, { useContext } from 'react'
import { Link, Router } from 'react-router-dom'
import useFunctionalities from '../customHooks/useFunctionalities'

import { Context } from '../ContextProvider'

function NextButton({ correctAnswer, nextButtonOnClick, clickNextBtn }) {
    const {
        isCorrect,
        quizScore, 
        setSCore, 
     } = useContext(Context)
     
    return (
        <>  
            {isCorrect ?
                <button value={correctAnswer} className='next-button' onClick={nextButtonOnClick}>
                    Next
                </button>
                :
                <Link className='next-button--anchor'  to='/tryagain'>
                    <button className='next-button' value={correctAnswer}>
                        Next
                    </button>
                </Link>}

        </>
    )
}

export default NextButton