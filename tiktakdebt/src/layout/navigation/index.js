import React from "react";
import { StyledNav } from "./index.styles";
import NavigationButton from "./NavigationButton/index";
import { BsHouseDoor, BsCalendar } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";

const Navigation = () => {
  const routes = [
    { route: "/debt", name: "Debt", component: <GrMoney /> },
    { route: "/", name: "Home", component: <BsHouseDoor /> },
    { route: "/calendar", name: "Calendar", component: <BsCalendar /> },
  ];

  return (
    <StyledNav>
      {routes.map((route, index) => (
        <NavigationButton key={index} navigation={route} />
      ))}
    </StyledNav>
  );
};

export default Navigation;
