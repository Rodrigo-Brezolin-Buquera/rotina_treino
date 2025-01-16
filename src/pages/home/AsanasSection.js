import React from "react";
import { SubTitle, Text } from "../../theme/components";
import { HomeSection } from "./styled";

export const AsanasSection = ({asanas, changeView}) => {
  const asanasList =  asanas.map((asana) => {
    return <Text key={asana}> {asana}</Text>;
  })
 
  return (
    <HomeSection onClick={changeView}>
      <SubTitle>Asanas</SubTitle>
      {asanasList}
    </HomeSection>
  );
};
