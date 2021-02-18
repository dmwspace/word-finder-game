import {useState, useEffect} from "react"
import tiles from "./Tiles.js"

function Hooks() {

    /*const letterArr = ["A", "A",
    "B", "B", "C", "D", "E", "E", "E", "E",
    "F", "G", "H", "H", "I", "I", "J", "K", "L",
    "M", "N", "N", "O", "O",
    "P", "P", "Qu", "R", "S", "S", "T",
    "U", "V", "W", "X", "Y", "Z"]*/

    const data = require('./words_dictionary.json')

    const legalMoves = 
        {
            zero: ["one", "four", "five"], 
            one: ["zero", "two", "four", "five", "six"],
            two: ["one", "three", "five", "six", "seven"],
            three: ["two", "six", "seven"],
            four: ["zero", "one", "five", "eight", "nine"],
            five: ["zero", "one", "two", "four", "six", "eight", "nine", "ten"],
            six: ["one", "two", "three", "five", "seven", "nine", "ten", "eleven"],  
            seven: ["two", "three", "six", "ten", "eleven"],
            eight: ["four", "five", "nine", "twelve", "thirteen"],
            nine: ["four", "five", "six", "eight", "ten", "twelve", "thirteen", "fourteen"],
            ten: ["five", "six", "seven", "nine", "eleven", "thirteen", "fourteen", "fifteen"],
            eleven: ["six", "seven", "ten", "fourteen", "fifteen"],
            twelve: ["eight", "nine", "thirteen"],
            thirteen: ["eight", "nine", "ten", "twelve", "fourteen"],
            fourteen: ["nine", "ten", "eleven", "thirteen", "fifteen"],
            fifteen: ["ten", "eleven", "fourteen"]
        }
    
    const [wordCount, setWordCount] = useState(0)
    const [pointCount, setPointCount] = useState(0)
    const [timeRemaining, setTimeRemaining] = useState(180)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [buttonLetters, setButtonLetters] = useState([])
    const [newWord, setNewWord] = useState("")
    const [usedButtons, setUsedButtons] = useState([])
    const [prevName, setPrevName] = useState("")
    const [submittedWord, setSubmittedWord] = useState([])
    const [buttonStyle, setButtonStyle] = useState(
        {
            zero: "button",
            one: "button",
            two: "button",
            three: "button",
            four: "button",
            five: "button",
            six: "button",
            seven: "button",
            eight: "button",
            nine: "button",
            ten: "button",
            eleven: "button",
            twelve: "button",
            thirteen: "button",
            fourteen: "button",
            fifteen: "button",
            sixteen: "button"
        })

    function startGame() {
        setUsedButtons([])
        setButtonLetters([])
        setNewWord("")
        setSubmittedWord([])
        resetStyle()
        setTimeRemaining(180)
        setIsTimeRunning(true)
        setWordCount(0)
        let firstArr = []
        const randNum = Math.floor(Math.random() * tiles[1].length)
        tiles.map(item => firstArr.push(item[randNum]))
        
        for (let i = 0; i < 16; i++) {
            let randIndex = Math.floor(Math.random() * firstArr.length)
            let randomLetter = firstArr[randIndex]
            setButtonLetters(prevButtonLetters => [...prevButtonLetters,randomLetter ])
            firstArr.splice(randIndex, 1)
        }
        
    }

    function handleClick(e) {
        const {name, value} = e.target
        let lowerCase = value.toLowerCase()
        if (usedButtons.length === 0) {
                setNewWord(lowerCase)
                setUsedButtons([...usedButtons, name])
                setPrevName(name)
                setButtonStyle(prevStyle => ({...prevStyle, [name]: "clicked-button"}))
                console.log(buttonStyle)
        } else if ((!usedButtons.includes(name)) && (legalMoves[`${name}`].includes(`${prevName}`))) {
            setNewWord(prevState => prevState + lowerCase)
            setUsedButtons([...usedButtons, name])
            setPrevName(name)
            setButtonStyle(prevStyle => ({...prevStyle, [name]: "clicked-button"}))
            console.log(buttonStyle)
        } else {}
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)}, 1000)
        } else if (timeRemaining === 0) {
            endGame()
        }}, [isTimeRunning, timeRemaining])

    function endGame() {
        resetStyle()
        setNewWord("")
        setIsTimeRunning(false)
    }

    function handleSubmit() { 
        if (data.hasOwnProperty(newWord) && !submittedWord.includes(newWord)) {
            setWordCount(submittedWord => submittedWord + 1)
            setPointCount(pointCount => pointCount + newWord.length - 2)
            setSubmittedWord(submittedWord => [...submittedWord, newWord])
        } else {
            if (!data.hasOwnProperty(newWord)) {
                setSubmittedWord(submittedWord => [...submittedWord, newWord + "--not found--"])
            }
            if (submittedWord.includes(newWord)) {
                setSubmittedWord(submittedWord => [...submittedWord, newWord + "--word used--"])
            }
            
        }
        setUsedButtons([])
        setNewWord("")
        resetStyle()  
    }
    function reverse() {
        setNewWord("")
        setUsedButtons([])
        resetStyle()
    }
    function resetStyle() {
        for (let key in buttonStyle) {
            setButtonStyle(prevStyle => ({...prevStyle, [key]: "button"}))
        }       
    }
    return (
        {
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
            isTimeRunning,
            pointCount
        }
    )  
}


        
export default Hooks 