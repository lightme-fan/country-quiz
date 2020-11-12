import React from 'react';
import useFetchQuiz from '../customHooks/useFetchQuiz'
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';

function HomePage() {
    const [classList, quizData, nextbutton, isNextPageShown, score, setScore, handleClick, handleNextButton, handleNextToTryAgain] = useFetchQuiz() 
    return (
        <div className='container'>
            {quizData.map(quiz =>                    
                <DisplayQuiz onClick={handleClick} key={quiz.capital} {...quiz} classList={classList}/>
                )}                                
            {nextbutton && quizData.map(quiz => <NextButton key={quiz.capital} {...quiz} nextButtonOnClick={handleNextButton} clickNextBtn={handleNextToTryAgain}/> )}
        </div>
    )
}

export default HomePage