import React from 'react'

function Results(props) {
    return (
        <div>
            <h2>Result</h2>
            <p>You got {props.score} correct answers</p>
            <button>Try again</button>
        </div>
    )
}

export default Results