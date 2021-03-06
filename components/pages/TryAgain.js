import React, { useContext  } from 'react'
import useFunctionalities from '../customHooks/useFunctionalities'
import { Link } from 'react-router-dom'
import win from '../../wini.svg' 
import { Context } from '../ContextProvider'


function TryAgain() {
    // Grab custom hooks
    const {
        isCorrect, 
        quizData, 
        nextbutton, 
        isNextPageShown, 
        quizScore, 
        setSCore, 
        isScoreShown,
        handleClick, 
        handleNextButton,
        handleTryAgain
     } = useContext(Context)

    return (
        <>
                <div className='container result'>
                    <img src={win} alt='quiz'/>
                    <h2 className='result--heading'>Results</h2>
                    <p className='result--text'>You got <span>{quizScore}</span> correct answers</p>
                    <Link to='/'><button className='result--button' onClick={handleTryAgain}>Try again</button></Link>
                </div>
        </>
    )
}

export default TryAgain