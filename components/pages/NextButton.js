import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFunctionalities from '../customHooks/useFunctionalities'

function NextButton({isCorrect, correctAnswer, nextButtonOnClick, clickNextBtn }) {
    
    return (
        <>  
            {isCorrect ?
                <button value={correctAnswer} className='next-button' onClick={nextButtonOnClick}>
                    Next
                </button>
                :
                <Link className='next-button--anchor' value={correctAnswer}  to='/tryagain'>
                    <button className='next-button' onClick={clickNextBtn}>
                        Next
                    </button>
                </Link>}

        </>
    )
}

export default NextButton