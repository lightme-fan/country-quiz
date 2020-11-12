import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NextButton from './pages/NextButton';
import TryAgain from './pages/TryAgain';
import useFetchQuiz from './customHooks/useFetchQuiz'

function App() {
    const [isCorrect, classList, quizData, nextbutton, isNextPageShown, score, setSCore, handleClick, handleNextButton, handleNextToTryAgain] = useFetchQuiz() 
    return (        
        <article className='quiz-container'>
            <h1>Country Quiz</h1>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route path='/tryagain'>
                        {!isNextPageShown && <TryAgain/>}
                    </Route>
                    <Route path='/backtohome'>
                        <HomePage/>
                    </Route>
                </Switch>
            </Router>
        </article>
    )
}

export default App