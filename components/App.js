import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import FirstPage from './First-page';
import NextButton from './NextButton';
import TryAgain from './TryAgain';
import useFetchQuiz from './useFetchQuiz'

function App() {
    const [isCorrect, classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    return (        
        <article className='quiz-container'>
            <h1>Country Quiz</h1>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <FirstPage/>
                    </Route>
                    <Route path='/tryagain'>
                        {!nextPage && <TryAgain/>}
                    </Route>
                    <Route path='/backtohome'>
                        <FirstPage/>
                    </Route>
                </Switch>
            </Router>
        </article>
    )
}

export default App