import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './components/Board';
import { createContext, useState, useEffect } from 'react';
import Keyboard from './components/Keyboard';
import ScoreCard from './components/ScoreCard';
export const AppContext = createContext();


function App() {
  useEffect(() => {
    callApi();
  }, []);
 

  const [word, setWord] = useState('')
  
  const alphabetsDefault = [
    {key:"A", val: false}, 
    {key:"B", val: false},
    {key:"C", val: false},
    {key:"D", val: false},
    {key:"E", val: false},
    {key:"F", val: false},
    {key:"G", val: false},
    {key:"H", val: false},
    {key:"I", val: false},
    {key:"J", val: false},
    {key:"K", val: false},
    {key:"L", val: false},
    {key:"M", val: false},
    {key:"N", val: false},
    {key:"O", val: false},
    {key:"P", val: false},
    {key:"Q", val: false},
    {key:"R", val: false},
    {key:"S", val: false},
    {key:"T", val: false},
    {key:"U", val: false},
    {key:"V", val: false},
    {key:"W", val: false},
    {key:"X", val: false},
    {key:"Y", val: false},
    {key:"Z", val: false}];
  const globalDataDefaultItem = { attempt: 0, alphabets: alphabetsDefault, guessedWord:[], 
    remainingCharacters: 0, score:0};
  const globalDataDefault = [globalDataDefaultItem]
  const [globalData, setGlobalData] = useState(globalDataDefault);
  const [guessedWord, setGuessedWord] = useState([' ',' ',' ',' ',' ',' ',' ',' '])
  const [currAttempt, setCurrAttempt] = useState()
  const [message, setMessage] = useState('')
  const [score, setScore] = useState(0)
  const [alphabets, setAlphabets] = useState(alphabetsDefault)
  const [remainingCharacters, setRemainingCharacters] = useState()
  
  const callApi = async () => {
    // initializing the global variables
    setGuessedWord([' ',' ',' ',' ',' ',' ',' ',' '])
    setCurrAttempt(0)
    setRemainingCharacters(0)
    setMessage('')
    setScore(0)
    setAlphabets(alphabetsDefault)
    setGlobalData([globalDataDefault])
    let fetchedWord = word
    // to keep trying until it return seven or more length word
    while(fetchedWord === '' && word === ''){
      const response = await fetch('https://random-word-api.herokuapp.com/word');
      const data = await response.json();
      if(data[0].length >= 7)
      {
        fetchedWord = data+'';
      }
    }// end loop
    setRemainingCharacters(fetchedWord.length)
    let startArray = []
    for (let i = 0; i < fetchedWord.length ; ++i) {
      startArray[i]= ' '
    }
    setGuessedWord(startArray)
    setWord(fetchedWord)
  }
  return (
    <div>
      <AppContext.Provider value={{alphabets, setAlphabets, globalData, setGlobalData, 
                                   currAttempt, setCurrAttempt, word, setWord, 
                                   guessedWord, setGuessedWord,
                                   remainingCharacters, setRemainingCharacters,
                                   message, setMessage,score, setScore}}>
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
              <Row>
            <Col>
              <center>
               
                <Button disabled={(!message)} variant="outline-primary d-grid d-md-block" onClick={callApi}>Start New Game</Button>{' '}
                
                <h4>{message}</h4>
              </center>
            </Col>
          </Row>
              </Col>
              <Col lg="4" className='mt-5'>
              <ScoreCard/>
              </Col>
          </Row>
        </Container>
      </AppContext.Provider>
    </div>
  );
}

export default App;
