import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

const GamePlay = () => {
  return (
    <MainComponent>
        <div className='top_section'>
<TotalScore/>
<NumberSelector />
</div>
<RoleDice/>
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
`;