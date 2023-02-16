import React, {useContext} from 'react'
import {AppContext} from "../App"
import Key from './Key';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Keyboard () {
  const {alphabets} = useContext(AppContext);
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className='row'>
            <div className='col-12'>
              <center><h6 className='mt-2 p-2'>Choose a letter that could be used in the above word </h6></center>
            </div>
          </div>
          <Row>
            <Col>
                {alphabets.map((alphabet, i) => {
                  return <Key key={i} keyIndex={i} keyVal={alphabet.key} disabledFlag={alphabet.val}/>
                })}
            </Col>
           
          </Row>      
          <div className="col-3"></div>
        </div>
      </div>
    </>
  )
}

export default Keyboard