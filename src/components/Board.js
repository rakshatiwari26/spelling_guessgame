import React, {useContext} from 'react'
import {AppContext} from "../App"
import Letter from "./Letter";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Board = () => {
  const {guessedWord} = useContext(AppContext);
  return (
     <Row><Col>
      <h5 className='mt-5 text-center p-5'>Guess the word</h5>
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