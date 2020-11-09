import React, { useEffect, useState } from 'react';

const region_API = 'https://restcountries.eu/rest/v2/regionalbloc/'
const city_API = 'https://restcountries.eu/rest/v2/';
const field_Api = '?fields='
const cap = 'https://restcountries.eu/rest/v2/all?fields=name;capital;flag'

const API = 'https://restcountries.eu/rest/v2/all'

function App() {

    const quizObj = {
        question: '',
        answers: [],
        correctAnswer: '',
        flag: '',
        id: ''
    }

    const [ data, setData ] = useState([quizObj])

    async function fetchData() {
        const response = await fetch(cap)
        const result = await response.json()
        setData(...data, result)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    console.log(data);

    return (
        <>
            {/* {data.map(item => <p>{item.name}</p>)} */}
            <h1>Hello World!</h1>
        </>
    )
}

export default App