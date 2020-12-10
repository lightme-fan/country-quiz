import React, { useContext} from 'react';
import useFunctionalities from '../customHooks/useFunctionalities'
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';
import TryAgain from './TryAgain'

import { Context } from '../ContextProvider'

function HomePage() {
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
        <div className='container'>
            {
                quizData.map(quiz =>                    
                <DisplayQuiz onClick={handleClick} key={quiz.capital} {...quiz}/>
            )}  

            {nextbutton && quizData.map(quiz => <NextButton key={quiz.capital} {...quiz} nextButtonOnClick={handleNextButton} /> )}
        </div>
    )
}

export default HomePage