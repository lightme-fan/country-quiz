import React from 'react';
import useFunctionalities from '../customHooks/useFunctionalities'
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';

function HomePage() {
    const [ 
        quizData, 
        nextbutton, 
        isNextPageShown, 
        score, 
        setScore, 
        handleClick, 
        handleNextButton
    ] = useFunctionalities()

    return (
        <div className='container'>
            {quizData.map(quiz =>                    
                <DisplayQuiz onClick={handleClick} key={quiz.capital} {...quiz}/>
                )}                                
            {nextbutton && quizData.map(quiz => <NextButton key={quiz.capital} {...quiz} nextButtonOnClick={handleNextButton} /> )}
        </div>
    )
}

export default HomePage