import React from 'react'
import { HomeSection } from './styled';
import { SubTitle, Text } from '../../theme/components';

export const TrainingSection = ({routine, changeView}) => {
    const {cardio, training, extra} = routine
    return (
          <HomeSection onClick={changeView} >    
            <SubTitle>Cardio</SubTitle>
            <Text>{cardio}</Text>
            <br/>
            <br/>
            <SubTitle>Treino</SubTitle>
            <Text>{training}</Text>
            <br/>
            <br/>
            <SubTitle>Extra</SubTitle>
            <Text>{extra}</Text>
          </HomeSection>
        );
}

