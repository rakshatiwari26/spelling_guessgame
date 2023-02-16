import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import {AppContext} from "../App"

function Key({keyVal, keyIndex,disabledFlag}) {
  const {remainingCharacters, setRemainingCharacters, currAttempt, 
    setCurrAttempt, word, guessedWord, alphabets, setAlphabets,
    setGuessedWord, globalData, setGlobalData,message, setMessage,score, setScore} = useContext(AppContext);
  
  const selectLetter =(event) =>{
    // to disable clicked alphabet button
    // check if whole word is guessed by checking remaining count is zero
    if(remainingCharacters === 0 && word){
      setMessage('Congrats! you have guessed '+ word.toUpperCase() +' in ' + (currAttempt-1) +  ' attempt')
      return
    }else if(!word){
      alert('Please click on start new game')
      return
    }

    event.currentTarget.disabled = true;
    // array taken to be shown on board
    let attemptedWord = [...guessedWord]
    let alphabetArray = [...alphabets]
    alphabetArray[keyIndex].val = true
    let matchedCount = 0
    let str = word+''

    // loop on each character of fetced word 
    for (let i = 0; i < str.length ; ++i) {
      // check if character matched with clicked alphabet
      if(str[i].toUpperCase() === keyVal.toUpperCase()){
          attemptedWord[i] = keyVal
          matchedCount++
      }else if (attemptedWord[i] !== ' ') {
          matchedCount++
      }
    }
    setRemainingCharacters(str.length - matchedCount)
    setCurrAttempt(currAttempt+1)  
    setGuessedWord(attemptedWord)
    setScore(matchedCount)
    
    globalData[currAttempt] = { attempt: currAttempt+1, alphabets: alphabetArray, guessedWord:attemptedWord, 
      remainingCharacters: (str.length - matchedCount), score:matchedCount}
    setGlobalData(globalData)
    if((str.length - matchedCount) === 0 && word){
      setMessage('Congrats! You guessed '+ word.toUpperCase() +' in ' + (currAttempt) +  ' attempt')
      return
    }
  }
  return (
    <>
    <Button className='key' onClick={selectLetter} disabled={disabledFlag} >
      {keyVal}
    </Button>
    </>
  )
  }

export default Key