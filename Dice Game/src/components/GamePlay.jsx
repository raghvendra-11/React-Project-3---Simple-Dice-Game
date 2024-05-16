import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { useState } from 'react'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0)
  const [error, setError] = useState()
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min) + min);
  }

  const roleDice = () =>{
    if (!selectedNumber){
      setError("You have not selected any number")
      return
    }
    
    const randomNumber = generateRandomNumber(1,7)
    setCurrentDice((prev)=>randomNumber);



    if (selectedNumber==randomNumber){
    setScore((prev) => prev+randomNumber)
    }
    else{
      setScore((prev) => prev-2)
    }

    setSelectedNumber(undefined);

  }

  const resetScore = () => {
    setScore(0)
  }


  return (
    <MainComponent>
        <div className='top_section'>
<TotalScore score={score}/>
<NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
</div>
<RoleDice currentDice={currentDice} roleDice={roleDice} />
<div className='button'>
<OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
<Button onClick={()=>setShowRules((prev)=>!prev)}>{
  showRules ? "Hide " : "Show "
} Rules</Button>
</div>

{showRules &&  <Rules />}
 
    </MainComponent>
  )
}

export default GamePlay

const MainComponent = styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .button{
      display: flex;
      margin-top: 40px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`;


