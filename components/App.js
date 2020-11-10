import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import DisplayQuiz from './DisplayQuiz';
import NextButton from './NextButton';
import Results from './Results';
import useFetchQuiz from './useFetchQuiz'

function App() {
    const [quizes, button, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    
    return (
        <article className='quiz-container'>
            <h1>Country Quiz</h1>
            <div className='container'>
                {quizes.map(quiz =>                    
                    <DisplayQuiz onClick={handleClick} key={quiz.capital} {...quiz}/>
                    )}
                {button &&             
                    <Link to='/results'><NextButton onClick={handleNextButton} /></Link>
                }
            </div>
            <Switch>
                <Route path='/results'><Results score={score}/></Route>
            </Switch>
        </article>
    )
}

export default App