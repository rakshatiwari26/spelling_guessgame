import React, {useContext} from 'react'
import {AppContext} from "../App"
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScoreCard = () => {
    const {currAttempt, remainingCharacters} = useContext(AppContext);

  return (
    <Row><Col>
    <Card >
    <Card.Body>
      <Card.Title>Score</Card.Title>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Attempts</th>
          <th>Remaining Characters</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{currAttempt}</td>
          <td>{remainingCharacters}</td>
        </tr>
        </tbody>
      </Table>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  )
}

export default ScoreCard