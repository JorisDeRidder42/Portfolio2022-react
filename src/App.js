import React from "react";
import Navigation from "./Header/Navigation";
import { Home } from "./pages/home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
