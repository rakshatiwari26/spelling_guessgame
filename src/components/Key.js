import React, {useContext} from 'react'
import Button from 'react-bootstrap/Button';
import {AppContext} from "../App"

function Key({keyVal}) {
  const {remainingCharacters, setRemainingCharacters, currAttempt, setCurrAttempt, word, setGuessedWord, matchedWord, setMatchedWord, setWord} = useContext(AppContext);
  
  const selectLetter =(event) =>{
    if(remainingCharacters === 0){
      alert('Game over')
    }
    event.currentTarget.disabled = true;
    let flag = false
    let isMatched = false
    let attemptedWord = []
    if(matchedWord){
      isMatched = true
      attemptedWord = matchedWord
    }
    
      let matchedCount = 0
      let indexCount = 0
      let str = word+''
      for (let i = 0; i < str.length ; ++i) {
        if(str[i].toUpperCase() === keyVal.toUpperCase()){
           attemptedWord[i] = keyVal
           flag = true
           matchedCount++
        }else if (isMatched && attemptedWord[i] != ' ') {
          attemptedWord[i] = attemptedWord[i]
          matchedCount++
        }else {
           attemptedWord[i] = ' '
        }
        indexCount++
      }
      if(flag)
      {
        setWord(str)
        setMatchedWord(attemptedWord)  
      }
        
      setRemainingCharacters(str.length - matchedCount)
      setCurrAttempt(currAttempt+1)  
      
    
    setGuessedWord(attemptedWord)
  }
  return (
    <>
    <Button className='key' onClick={selectLetter} >
      {keyVal}
    </Button>
    </>
  )
  }

export default Key