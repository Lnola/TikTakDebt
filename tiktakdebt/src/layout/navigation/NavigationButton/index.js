import React from "react";
import { useHistory } from "react-router-dom";
import { StyledNavigationButton } from "./index.styles";
import { StyledLabel } from "./index.styles";

const NavigationButton = ({ navigation }) => {
  const history = useHistory();
  return (
    <StyledNavigationButton onClick={() => history.push(navigation.route)}>
      <span>{navigation.component}</span>
      <StyledLabel>{navigation.name}</StyledLabel>
    </StyledNavigationButton>
  );
};

export default NavigationButton;
