import React from 'react';
import useFetchQuiz from './useFetchQuiz'
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';

function FirstPage() {
    const [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    return (
        <div className='container'>
            {quizes.map(quiz =>                    
                <DisplayQuiz onClick={handleClick} key={quiz.capital} {...quiz} classList={classList}/>
                )}                                
            {button && quizes.map(quiz => <NextButton key={quiz.capital} {...quiz}/> )}
        </div>
    )
}

export default FirstPage