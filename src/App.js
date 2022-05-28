import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import Navigation from "./Header/Navigation";
import { Home } from "./pages/home";

function App() {
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);
  // }, []);
  return (
    <div className="App">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
