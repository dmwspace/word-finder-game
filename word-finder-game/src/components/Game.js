import React from "react"
import Hooks from "./Hooks"
//import StayScrolled from "react-stay-scrolled"

function Game() {
    const {
        buttonLetters,
        startGame,
        submittedWord,
        handleClick,
        reverse,
        handleSubmit,
        newWord,
        buttonStyle,
        timeRemaining,
        wordCount,
        isTimeRunning
    } = Hooks()

    const wordList = submittedWord.map(word => <h2 key={word}>{word}</h2>)
    // let min = Math.floor(timeRemaining / 60)
    // let sec = timeRemaining % 60
    // let formattedTime = min + ":" + sec
    return (
        <div className="flex-container">
            <div>
                <button
                    style={{width: 160, fontSize: 25}}
                    onClick={handleSubmit}
                    disabled={!isTimeRunning}
                >Submit</button>
                <button 
                    style={{width: 160, fontSize: 25}}
                    onClick={reverse}
                    disabled={!isTimeRunning}
                >Undo</button>
                <div className="letters">
                    <div className="letters-row1">
                        <button
                            className={buttonStyle["zero"]}
                            name="zero"
                            value={buttonLetters[0]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[0]}</button>
                        <button
                            className={buttonStyle["one"]}
                            name="one"
                            value={buttonLetters[1]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[1]}</button>
                        <button
                            className={buttonStyle["two"]}
                            name="two"
                            value={buttonLetters[2]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[2]}</button>
                        <button
                            className={buttonStyle["three"]}
                            name="three"
                            value={buttonLetters[3]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[3]}</button>
                    </div>
                    <div className="letters-row2">
                        <button
                            className={buttonStyle["four"]}
                            name="four"
                            value={buttonLetters[4]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[4]}</button>
                        <button
                            className={buttonStyle["five"]}
                            name="five"
                            value={buttonLetters[5]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[5]}</button>
                        <button
                            className={buttonStyle["six"]}
                            name="six"
                            value={buttonLetters[6]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[6]}</button>
                        <button
                            className={buttonStyle["seven"]}
                            name="seven"
                            value={buttonLetters[7]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[7]}</button>
                    </div>
                    <div className="letters-row3">
                        <button
                            className={buttonStyle["eight"]}
                            name="eight"
                            value={buttonLetters[8]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[8]}</button>
                        <button
                            className={buttonStyle["nine"]}
                            name="nine"
                            value={buttonLetters[9]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[9]}</button>
                        <button
                            className={buttonStyle["ten"]}
                            name="ten"
                            value={buttonLetters[10]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[10]}</button>
                        <button
                            className={buttonStyle["eleven"]}
                            name="eleven"
                            value={buttonLetters[11]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[11]}</button>
                    </div>
                    <div className="letters-row4">
                        <button
                            className={buttonStyle["twelve"]}
                            name="twelve"
                            value={buttonLetters[12]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[12]}</button>
                        <button
                            className={buttonStyle["thirteen"]}
                            name="thirteen"
                            value={buttonLetters[13]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[13]}</button>
                        <button
                            className={buttonStyle["fourteen"]}
                            name="fourteen"
                            value={buttonLetters[14]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[14]}</button>
                        <button
                            className={buttonStyle["fifteen"]}
                            name="fifteen"
                            value={buttonLetters[15]}
                            onClick={handleClick}
                            disabled={!isTimeRunning}
                        >{buttonLetters[15]}</button>
                    </div>
                </div>
                <button
                    className="start-game-button"
                    onClick={startGame}
                    disabled={timeRemaining < 60 && timeRemaining > 0}
                >Start</button><span style={{fontSize: 50}}> {newWord}</span>
            </div>
            <div id="wrapper">
                <div id="timer">
                    {timeRemaining}
                </div>
                <div className="word-list">
                    {wordList}
                </div>
                <h1 id="word-count">Word Count: {wordCount}</h1>
            </div> 
        </div>
    )
}
export default Game 