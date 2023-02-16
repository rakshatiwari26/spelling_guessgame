import React, {useContext} from 'react'
import {AppContext} from "../App"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ClickableLetter ({attemptVal}) {
  const { setAlphabets,setGuessedWord, globalData, score, setScore} = useContext(AppContext);
  function getStateOfAttempt() {
      const currentAttemptData = globalData[attemptVal]
      setGuessedWord(currentAttemptData.guessedWord)
      setAlphabets(currentAttemptData.alphabets)
      setScore(currentAttemptData.score)
  }
  return (
    <Row><Col>
    <span style={{'cursor':'pointer'}} onClick={getStateOfAttempt}>{attemptVal}</span>
    </Col></Row>
  )
}

export default ClickableLetter