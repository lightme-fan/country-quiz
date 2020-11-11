import React from 'react'
import { Link, Router } from 'react-router-dom'
import useFetchQuiz from './useFetchQuiz'

function NextButton({ isCorrect, onClick }) {

    return (
        <>  {isCorrect ?
            <Link to='/'>
                <button className='next-button'>
                    Next
                </button>
            </Link> :
            <Link to='/result'>
                <button className='next-button' onClick={onClick}>
                    Next
                </button>
            </Link>}
        </>
    )
}

export default NextButton