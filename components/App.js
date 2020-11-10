import React from 'react';
import DisplayQuiz from './DisplayQuiz';
import useFetchQuiz from './useFetchQuiz'

function App() {
    const [ quizes ] = useFetchQuiz()  
    console.log(quizes);

    return (
        <article className='quiz-container'>
            <div className='container'>
                <h1>Country Quiz</h1>
                {quizes.map(quiz =>                    
                    <DisplayQuiz key={quiz.capital} {...quiz}/>
                )}
            </div>
        </article>
    )
}

export default App