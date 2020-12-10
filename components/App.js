import React, { useContext, useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TryAgain from './pages/TryAgain';
import quiz from '../undraw_adventure_4hum 1.svg'
import { Context } from './ContextProvider'

function App() {
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
        <article className='quiz-container'>
            <h1>Country Quiz</h1>
            <img className="quiz-img" src={quiz} alt="quizimg"/>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route path='/tryagain'>
                        {!isNextPageShown && <TryAgain />}
                    </Route>
                </Switch>
            </Router>
            <div className='builder'>By Tokiniaina Fanilo © 2020</div>
        </article>
    )
}

export default App