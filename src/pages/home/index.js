import React from 'react'
import { StyledH1, StyledH2, StyledMain, StyledP, StyledSection } from "./styled";
import { useState } from "react";
import routines from '../../api/routines';


const HomePage = () => {
    const today = new Date().getDay();
    const [weekday, setWeekday] = useState(today);
    const [view, setView] = useState("gym");
    const routine = routines[weekday];
  
    const asanas = routine.asanas.map((asana) => {
      return <StyledP key={asana}> {asana}</StyledP>;
    });
  
    const TrainingSection = () => {
      return (
        <StyledSection onClick={()=> setView("asanas")} >
          
          <StyledH2>Cardio</StyledH2>
          <StyledP>{routine.cardio}</StyledP>
          <br/>
          <br/>
          <StyledH2>Treino</StyledH2>
          <StyledP>{routine.routine}</StyledP>
          <br/>
          <br/>
          <StyledH2>Extra</StyledH2>
          <StyledP>{routine.extra}</StyledP>
        </StyledSection>
      );
    };
  
    const AsanasSection = () => {
      return (
        <StyledSection onClick={()=> setView("gym")}>
          <StyledH2>Asanas</StyledH2>
          {asanas}
        </StyledSection>
      );
    };
  
    const ViewSelector = () => {
      switch (view) {
        case "gym":
          return <TrainingSection />;
        case "asanas":
          return <AsanasSection />;
        default:
          return <TrainingSection />;
      }
    };
  
    return (
      <StyledMain>
        <StyledH1>{routine.day}</StyledH1>
        <ViewSelector />
      </StyledMain>
    );
}
export default HomePage