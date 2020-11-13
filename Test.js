{showScore
    ? (<TryAgain score={score} tryTheGameAgain={tryTheGameAgain} />)
    : (
        <div className="container">
            {countries.map(country => (
                <DisplayQuiz key={country.capital}
                    country={country}
                    handleClick={handleClick}
                    isCorrect={isCorrect}
                    toggle={toggle}
                />
            ))}
            {isShow && (<NextButton
                handleShowBtn={handleShowBtn}
                isCorrect={isCorrect}
            />)}
        </div>
    )
}
</>
)