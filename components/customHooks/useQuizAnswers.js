// import React from 'react'

// function useQuizAnswer() {
//     function handleTrueValue(e) {
//         const userGuess = e.target
//         setbutton(true)
//         const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        
//         if (userGuess.value == findAnswer.correctAnswer) {
//             userGuess.classList.add('true')
//             console.log(findAnswer.correctAnswer);
//             findAnswer.isCorrect = true
//             console.log(findAnswer.isCorrect);
//             userGuess.classList.add('untrue')
//             // console.log(findAnswer.newScore);
//             setScore(score + 1) 
//         }
//     }
    
//     function handleFalseValue(e) {        
//         const userGuess = e.target
//         setbutton(true)
//         const findAnswer = quizes.find(quiz => quiz.correctAnswer);
        
//         if (userGuess !== findAnswer.correctAnswer) {
//             userGuess.classList.add('untrue')
//             findAnswer.correctAnswer           
//         }
//     }
    
//     return [ handleFalseValue ]
// }