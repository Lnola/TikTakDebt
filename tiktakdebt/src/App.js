import React from "react";
import Content from "./layout/content";
import Navigation from "./layout/navigation";
import GlobalStyles from "./globalStyles";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navigation />
      <Content />
    </BrowserRouter>
  );
};

export default App;
