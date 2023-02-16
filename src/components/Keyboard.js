import React from 'react'
import Key from './Key';

const Keyboard = () => {
  const keys1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I" ];
  const keys2 = ["J", "K", "L", "M", "N", "O", "P", "Q", "R"];
  const keys3 = ["S", "T", "U", "V", "W", "X", "Y", "Z"];
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className='row'>
            <div className='col-12'>
              <center><h6 className='mt-5 p-5'>Choose a letter that could be used in the above word </h6></center>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className='line1'>
                {keys1.map((key, i) => {
                  return <Key key={i} keyVal={key}/>
                })}
              </div>
            </div>
            <div className='row'>
              <div className='col-12'>
                <div className='line2'>
                  {keys2.map((key, i) => {
                    return <Key key={i} keyVal={key}/>
                  })}
                </div>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='line3'>
                    {keys3.map((key, i) => {
                      return <Key key={i} keyVal={key}/>
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>      
          <div className="col-3"></div>
        </div>
      </div>
    </>
  )
}

export default Keyboard