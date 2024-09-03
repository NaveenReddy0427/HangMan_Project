import { Link, useLocation } from 'react-router-dom';
import MaskedText from '../../components/MaskedText/MaskedText';
import LetterButtons from '../../components/LetterButtons/LetterButtons';
import { useState } from 'react';

const PlayGame = () => {

  const [usedLetters, setUsedLetters] = useState([])

  const location = useLocation();
  const wordSelected = location.state?.wordSelected
  
  const handleLetterClick = function(letter){
    setUsedLetters([...usedLetters, letter])
  }

  return (
    <>
    <div>
            <h1>Play Game</h1>

            <MaskedText text={wordSelected} usedLetters={usedLetters} />
            <hr/>

            <LetterButtons text={wordSelected} usedLetters={usedLetters} onLetterClick={handleLetterClick}  />
            <hr/>

            <Link to='/start' className='text-blue-600 underline hover:text-blue-700'> Start Game </Link>
    </div>
    </>
  )
}

export default PlayGame