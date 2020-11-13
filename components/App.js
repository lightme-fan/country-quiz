import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TryAgain from './pages/TryAgain';
import useFunctionalities from './customHooks/useFunctionalities'

function App() {
    const [
        isCorrect, 
        quizData, 
        nextbutton, 
        isNextPageShown, 
        score, 
        setSCore, 
        handleClick, 
        handleNextButton
    ] = useFunctionalities()

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