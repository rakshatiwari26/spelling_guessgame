import React, {useContext} from 'react'
import {AppContext} from "../App"
import Letter from "./Letter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Board = () => {
  const {guessedWord} = useContext(AppContext);
  return (
     <Row><Col>
      <h5 className='mt-2 p-5'><center>Guess the word</center></h5>
      {" "}
      <div className="row">
          {guessedWord.map((key, i) => {
            return <Letter  key={i}  attemptVal={key} />
          })}
      </div>
      </Col>
    </Row>
  )
}

export default Board