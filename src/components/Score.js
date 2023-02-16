import React from 'react'
import { Row, Col } from 'react-bootstrap'

function Score ({attemptVal}) {
  return (
    <Row><Col>
    <span >{attemptVal}</span>
    </Col>
    </Row>
  )
}

export default Score