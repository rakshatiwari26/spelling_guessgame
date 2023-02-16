import React, {useContext} from 'react'
import {AppContext} from "../App"
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Score from './Score';
import ClickableLetter from './ClickableLetter';

const ScoreCard = () => {
  const {globalData, score} = useContext(AppContext);
  return (
    <Row><Col>
    <Card >
    {" "}
    <Card.Body>
    Score : {score}
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Attempts</th>
          <th>Remaining Characters</th>
        </tr>
      </thead>
      
      </Table>
    
      <Row><Col>
      <Row><Col>
          {globalData.map((key, i) => {
            return <ClickableLetter  key={i}  attemptVal={key.attempt} /> 
          })}
          </Col>
          </Row>
      </Col>
      <Col>
      <Row><Col>
          {globalData.map((key, i) => {
            return <Score  key={i}  attemptVal={key.remainingCharacters} /> 
          })}
      </Col>
      </Row>
      </Col></Row>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  )
}


export default ScoreCard