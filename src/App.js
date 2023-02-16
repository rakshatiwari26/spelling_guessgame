import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import { createContext, useState } from 'react';
import Keyboard from './components/Keyboard';
import ScoreCard from './components/ScoreCard';
export const AppContext = createContext();


function App() {
  const [word, setWord] = useState('')
  const [matchedWord, setMatchedWord] = useState('')
  const [guessedWord, setGuessedWord] = useState([' ',' ',' ',' ',' ',' ',' ',' '])
  const [currAttempt, setCurrAttempt] = useState(0)
  const [remainingCharacters, setRemainingCharacters] = useState(0)
  let count = 0
  const callApi = async () => {
    setMatchedWord('')
    setGuessedWord([' ',' ',' ',' ',' ',' ',' ',' '])
    setCurrAttempt(0)
    setRemainingCharacters(0)
    
    let fetchedWord = word
    while(fetchedWord === '' && word === ''){
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const data = await response.json();
      if(data[0].length >= 7)
      {
        fetchedWord = data;
        count++
      }
    }
    
    setRemainingCharacters((fetchedWord+'').length)
    let startArray = []
    for (let i = 0; i < (fetchedWord+'').length ; ++i) {
      startArray[i]= ' '
    }
    setGuessedWord(startArray)
    setWord(fetchedWord)
  }
  return (
    <div>
      <AppContext.Provider value={{ currAttempt, setCurrAttempt, word, setWord, guessedWord, setGuessedWord,matchedWord, setMatchedWord,remainingCharacters, setRemainingCharacters}}>
        <Container>
            <Row>
              <Col lg="8">
                <Row>
                  <Col>
                  <Board/>
                  </Col></Row>
                <Row>
                  <Col>
                  <Keyboard/>
                  </Col>
              </Row>
              </Col>
              <Col lg="4" className='mt-5'>
              <ScoreCard/>
              </Col>
          </Row>
          <Row>
            <Col>
              <center>
                <Button variant="outline-primary" onClick={callApi}>Start New Game</Button>{' '}
              </center>
            </Col>
          </Row>
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App;
