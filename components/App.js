import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import FirstPage from './First-page';
import Results from './Results';
import useFetchQuiz from './useFetchQuiz'

function App() {
    const [classList, quizes, button, nextPage, score, handleClick, handleNextButton] = useFetchQuiz() 
    
    return (        
        <article className='quiz-container'>
            <h1>Country Quiz</h1>
            <Router>
                <Switch>
                    <Route path='/'>
                        <FirstPage/>
                    </Route>
                    <Route path='/result'>
                        <Results />
                    </Route>
                    <Route path='/home'>
                        <FirstPage/>
                    </Route>
                </Switch>
            </Router>
        </article>
    )
}

export default App